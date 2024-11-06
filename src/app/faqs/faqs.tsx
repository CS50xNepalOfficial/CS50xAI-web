"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IFAQ } from "../types/faq_list_type";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



import BGEffect from "@/assets/homepage/bg-effect.svg";


export default function FAQcomponent({ FAQs }: { FAQs: IFAQ[] }) {
  return (
    <main style={{ backgroundImage: `url(${BGEffect.src})` }}>
      <div className="flex-col w-2/3 justify-center items-center mx-auto ">
        <h1 className="flex text-4xl font-black items-center justify-center py-5">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="py-8 sm:py-8 flex flex-col gap-4"
          style={{ borderRadius: "6px" }}
        >
          {FAQs.map((qa, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{qa.question}</AccordionTrigger>
              <AccordionContent>{qa.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};


