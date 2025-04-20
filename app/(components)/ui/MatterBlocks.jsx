"use client";
import { useEffect, useRef, useCallback, useState } from "react";
import Matter from "matter-js";
import { useResponsiveStates } from "@/app/(utils)/hooks";

const gravity = 0.3;
const maxHeight = 900;
const thickness = 1000;

const MatterBlocks = ({ children, labelName = "dragableLabels" }) => {
  const matterContainerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const rectanglesRef = useRef([]);
  const labelsRef = useRef(new Map());
  const { isMobile } = useResponsiveStates();

  // Function to create a rectangle and add it to the world
  const addLabelToWorld = useCallback(
    (HtmlLabel) => {
      const matterContainer = matterContainerRef.current;
      if (!matterContainer) return;

      const x = Matter.Common.random(0, matterContainer.clientWidth);
      const y = Matter.Common.random(-maxHeight, -100);

      // const { x, y } = {
      //   x: Math.random() * matterContainer.offsetWidth,
      //   y: Math.random() * 100,
      // };

      const computedStyle = window.getComputedStyle(HtmlLabel);
      const borderRadius = parseFloat(computedStyle.borderRadius) * 0.75 || 0; // Default to 0 if not set
      const w = HtmlLabel.offsetWidth + 1;
      const h = HtmlLabel.offsetHeight + 1;

      const box = {
        body: Matter.Bodies.rectangle(x, y, w, h, {
          restitution: 0,
          friction: 0.3,
          frictionAir: 0.03,
          chamfer: { radius: borderRadius },
          // mass: w * h * 0.0001,
        }),
        elem: HtmlLabel,
        render() {
          const { x, y } = this.body.position;
          this.elem.style.top = `${y}px`;
          this.elem.style.left = `${x}px`;
          this.elem.style.transform = `translate(-50%, -50%) rotate(${this.body.angle}rad)`;
        },
      };

      rectanglesRef.current.push(box);
      Matter.Composite.add(engineRef.current.world, box.body);
      labelsRef.current.set(HtmlLabel, box);
    },
    [isMobile]
  );

  // Initialize Matter.js
  useEffect(() => {
    const matterContainer = matterContainerRef.current;
    if (!matterContainer) return;

    const engine = Matter.Engine.create();
    engine.gravity.y = gravity;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: matterContainer,
      engine: engine,
      options: {
        width: matterContainer.offsetWidth,
        height: matterContainer.offsetHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });
    renderRef.current = render;

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // toggle this for rendering matter bodies
    // Matter.Render.run(render);

    const ground = Matter.Bodies.rectangle(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + thickness / 2,
      27184,
      thickness,
      { isStatic: true, render: { fillStyle: "brown" } }
    );
    const top = Matter.Bodies.rectangle(
      matterContainer.clientWidth / 2,
      0 - maxHeight - 100 - thickness / 2,
      27184,
      thickness,
      { isStatic: true, render: { fillStyle: "brown" } }
    );
    const leftWall = Matter.Bodies.rectangle(
      0 - thickness / 2,
      matterContainer.clientHeight / 2,
      thickness,
      matterContainer.clientHeight * 5,
      { isStatic: true, render: { fillStyle: "brown" } }
    );
    const rightWall = Matter.Bodies.rectangle(
      matterContainer.clientWidth + thickness / 2,
      matterContainer.clientHeight / 2,
      thickness,
      matterContainer.clientHeight * 5,
      { isStatic: true, render: { fillStyle: "red" } }
    );

    Matter.Composite.add(engine.world, [ground, top, leftWall, rightWall]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
    });
    Matter.Composite.add(engine.world, mouseConstraint);
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    (function rerender() {
      rectanglesRef.current.forEach((element) => element.render());
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
    })();

    const handleResize = () => {
      setTimeout(() => {
        const containerWidth = matterContainer.offsetWidth;
        const containerHeight = matterContainer.offsetHeight;
        render.canvas.width = containerWidth;
        render.canvas.height = containerHeight;

        Matter.Body.setPosition(
          ground,
          Matter.Vector.create(
            containerWidth / 2,
            containerHeight + thickness / 2
          )
        );

        Matter.Body.setPosition(
          rightWall,
          Matter.Vector.create(
            containerWidth + thickness / 2,
            containerHeight / 2
          )
        );

        rectanglesRef.current.forEach((rectangle) => {
          const newWidth = rectangle.elem.offsetWidth + 1;
          const newHeight = rectangle.elem.offsetHeight + 1;

          const scaleX =
            newWidth /
            (rectangle.body.bounds.max.x - rectangle.body.bounds.min.x);
          const scaleY =
            newHeight /
            (rectangle.body.bounds.max.y - rectangle.body.bounds.min.y);

          Matter.Body.scale(rectangle.body, scaleX, scaleY);

          const { x, y } = rectangle.body.position;
          Matter.Body.setPosition(rectangle.body, { x, y });
          Matter.Body.setAngle(rectangle.body, rectangle.body.angle); // Retain the current angle
        });
      }, 20);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world);
      Matter.Engine.clear(engine);
    };
  }, []);

  // Update labels when children change
  useEffect(() => {
    const HtmlLabels = document.getElementsByClassName(labelName);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(HtmlLabels).forEach((HtmlLabel) => {
            if (!labelsRef.current.has(HtmlLabel)) {
              addLabelToWorld(HtmlLabel);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (matterContainerRef.current) {
      observer.observe(matterContainerRef.current);
    }
  }, [children, addLabelToWorld]);

  return (
    <div
      id="matterContainer"
      className="matterContainer cursor-grabbing w-full h-full"
      ref={matterContainerRef}
    >
      {children}
    </div>
  );
};

export default MatterBlocks;
