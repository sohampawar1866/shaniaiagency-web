"use client";

import React, { useRef } from "react";
import { AnimatedBeam, Circle } from "@/components/ui/animated-beam";
import { FileText, MessageSquare, Database, Webhook, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkflowBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-mockup p-3.5 sm:p-5 text-left transition-all duration-300 hover:shadow-modal">
      {/* Window Frame Title Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline-soft px-1 sm:px-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block flex-shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-success-accent inline-block flex-shrink-0" />
          <span className="text-caption font-semibold text-steel ml-1.5 truncate">
            Workflow Transformation Engine — Live Architecture
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 text-micro font-bold text-moss-dark bg-teal-light/70 px-2.5 py-0.5 rounded-full border border-teal-600/20">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
            Live Flow
          </span>
        </div>
      </div>

      {/* Beam Diagram Canvas */}
      <div
        ref={containerRef}
        className="relative bg-surface rounded-xl p-4 sm:p-6 sm:py-8 flex items-center justify-between overflow-hidden min-h-[320px] sm:min-h-[350px]"
      >
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#c7cad5 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* ── COLUMN 1: FRAGMENTED INPUTS ──────────────────────────────── */}
        <div className="relative z-10 flex flex-col justify-between gap-3 sm:gap-4 my-auto">
          {/* Label Tag */}
          <div className="text-micro font-bold text-steel uppercase tracking-widest mb-1">
            Manual Inputs
          </div>

          {/* Node 1: Docs & Invoices */}
          <div className="group flex items-center gap-2.5">
            <Circle
              ref={docRef}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-white border-brand-coral/40 shadow-subtle group-hover:border-brand-coral"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-coral-dark" />
            </Circle>
            <div className="hidden sm:block">
              <p className="text-micro font-bold text-ink leading-tight">Invoices &amp; Docs</p>
              <p className="text-[10px] text-steel">Unstructured</p>
            </div>
          </div>

          {/* Node 2: Team WhatsApp / Chats */}
          <div className="group flex items-center gap-2.5">
            <Circle
              ref={chatRef}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-white border-teal-light shadow-subtle group-hover:border-brand-teal"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-moss-dark" />
            </Circle>
            <div className="hidden sm:block">
              <p className="text-micro font-bold text-ink leading-tight">Team Chats</p>
              <p className="text-[10px] text-steel">WhatsApp / Slack</p>
            </div>
          </div>

          {/* Node 3: Database & Spreadsheets */}
          <div className="group flex items-center gap-2.5">
            <Circle
              ref={dataRef}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-white border-brand-blue/30 shadow-subtle group-hover:border-brand-blue"
            >
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
            </Circle>
            <div className="hidden sm:block">
              <p className="text-micro font-bold text-ink leading-tight">ERP &amp; Sheets</p>
              <p className="text-[10px] text-steel">Data Silos</p>
            </div>
          </div>

          {/* Node 4: Legacy APIs & Webhooks */}
          <div className="group flex items-center gap-2.5">
            <Circle
              ref={apiRef}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-white border-brand-yellow/50 shadow-subtle group-hover:border-brand-yellow"
            >
              <Webhook className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-dark" />
            </Circle>
            <div className="hidden sm:block">
              <p className="text-micro font-bold text-ink leading-tight">APIs &amp; Logic</p>
              <p className="text-[10px] text-steel">Custom Webhooks</p>
            </div>
          </div>
        </div>

        {/* ── COLUMN 2: SHANIAI CENTRAL ORCHESTRATION ENGINE ───────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center px-1 sm:px-4">
          <div className="relative flex items-center justify-center">
            {/* Glowing aura */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-yellow/20 blur-xl pointer-events-none animate-pulse" />
            
            <Circle
              ref={centerRef}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary text-on-primary border-2 border-brand-yellow shadow-card p-0 flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-yellow flex items-center justify-center font-bold text-ink text-body-sm sm:text-body-md shadow-subtle">
                S
              </span>
            </Circle>
          </div>

          {/* Core Labels */}
          <div className="text-center mt-2.5">
            <span className="font-display font-semibold text-caption sm:text-body-sm text-ink block leading-tight">
              ShaniAI Engine
            </span>
            <span className="text-[10px] sm:text-micro font-bold text-brand-blue uppercase tracking-wider block mt-0.5">
              Automated Pipeline
            </span>
          </div>
        </div>

        {/* ── COLUMN 3: UNIFIED AUTOMATED OUTCOME ──────────────────────── */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="text-micro font-bold text-steel uppercase tracking-widest mb-2 text-center">
            Outcome
          </div>

          <Circle
            ref={outputRef}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-success-accent shadow-card flex items-center justify-center hover:scale-105 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-light/50 flex items-center justify-center">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-success-accent fill-success-accent/20" />
            </div>
          </Circle>

          <div className="text-center mt-2.5">
            <span className="font-semibold text-caption sm:text-body-sm text-ink block leading-tight">
              Unified OS
            </span>
            <span className="text-[10px] sm:text-micro font-medium text-success-accent flex items-center justify-center gap-0.5 mt-0.5">
              <span>✓</span> Zero Manual Drag
            </span>
          </div>
        </div>

        {/* ── ANIMATED BEAMS ───────────────────────────────────────────── */}
        {/* Beam 1: Docs -> ShaniAI */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={docRef}
          toRef={centerRef}
          curvature={-25}
          duration={3.5}
          gradientStartColor="#ff9999"
          gradientStopColor="#ffd02f"
          pathColor="#e0e2e8"
          dotSpacing={5}
        />

        {/* Beam 2: Chat -> ShaniAI */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={chatRef}
          toRef={centerRef}
          curvature={-10}
          duration={3.8}
          delay={0.4}
          gradientStartColor="#0fbcb0"
          gradientStopColor="#ffd02f"
          pathColor="#e0e2e8"
          dotSpacing={5}
        />

        {/* Beam 3: Data -> ShaniAI */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={dataRef}
          toRef={centerRef}
          curvature={10}
          duration={3.6}
          delay={0.8}
          gradientStartColor="#4262ff"
          gradientStopColor="#ffd02f"
          pathColor="#e0e2e8"
          dotSpacing={5}
        />

        {/* Beam 4: API -> ShaniAI */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={apiRef}
          toRef={centerRef}
          curvature={25}
          duration={4}
          delay={1.2}
          gradientStartColor="#ffd02f"
          gradientStopColor="#ffd02f"
          pathColor="#e0e2e8"
          dotSpacing={5}
        />

        {/* Beam 5: ShaniAI -> Unified OS */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={outputRef}
          curvature={0}
          duration={2.8}
          gradientStartColor="#ffd02f"
          gradientStopColor="#00b473"
          pathColor="#e0e2e8"
          pathWidth={2}
          dotSpacing={5}
        />
      </div>

      {/* Narrative Footer Strip */}
      <div className="mt-3.5 pt-3 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between gap-2 text-micro sm:text-caption text-steel">
        <span className="flex items-center gap-1.5 font-semibold text-charcoal">
          <CheckCircle2 className="w-4 h-4 text-brand-blue" />
          Your messy tasks &rarr; Transformed into one seamless autonomous workflow
        </span>
        <span className="text-[11px] font-bold text-brand-blue bg-surface px-2.5 py-1 rounded-full border border-hairline">
          Zero Vendor Lock-in
        </span>
      </div>
    </div>
  );
}
