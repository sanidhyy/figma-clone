"use client";

import { fabric } from "fabric";
import { useEffect, useRef } from "react";

import { LeftSidebar } from "@/components/left-sidebar";
import { Live } from "@/components/live";
import { Navbar } from "@/components/navbar";
import { RightSidebar } from "@/components/right-sidebar";
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from "@/lib/canvas";

const HomePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
      });
    });

    window.addEventListener("resize", () => {
      handleResize({ canvas });
    });

    () => {
      window.removeEventListener("resize", () => {
        handleResize({
          canvas: null,
        });
      });
    };
  }, [canvasRef]);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <LeftSidebar />

        <Live canvasRef={canvasRef} />

        <RightSidebar />
      </section>
    </main>
  );
};

export default HomePage;
