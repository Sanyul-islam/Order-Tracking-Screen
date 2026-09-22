"use client";

import { useState } from "react";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Package,
  Truck,
} from "lucide-react";

import { orders } from "@/data/orderData";

/* --------------------------------
   Status Icon
--------------------------------- */

function StatusIcon({ item }) {
  if (item.completed) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check size={17} strokeWidth={3} />
      </div>
    );
  }

  if (item.current) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-100">
        <Truck size={17} />
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 bg-white">
      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
    </div>
  );
}

/* --------------------------------
   Status Card
--------------------------------- */

function StatusCard({ order }) {
  const stateStyles = {
    "tracking-unavailable": {
      background: "bg-indigo-600",
      eyebrow: "Order update",
      icon: "⏳",
    },
    delayed: {
      background: "bg-amber-500",
      eyebrow: "Delivery update",
      icon: "!",
    },

    "delivered-not-received": {
      background: "bg-red-500",
      eyebrow: "Action needed",
      icon: "!",
    },
  };

  const style = stateStyles[order.state];

  return (
    <section
      className={`rounded-3xl p-5 text-white shadow-lg ${style.background}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
            {style.eyebrow}
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            {order.status.label}
          </h2>

          <p className="mt-2 text-sm leading-5 text-white/80">
            {order.status.description}
          </p>
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">
          {style.icon}
        </div>
      </div>

      <div className="mt-5 border-t border-white/20 pt-4">
        <div className="flex items-center gap-2">
          <Clock3 size={14} />

          <span className="text-xs text-white/70">{order.delivery.label}</span>
        </div>

        <p className="mt-1 text-sm font-semibold">{order.delivery.date}</p>

        <p className="mt-0.5 text-xs text-white/70">{order.delivery.time}</p>
      </div>
    </section>
  );
}

/* --------------------------------
   Delivery Timeline
--------------------------------- */

function DeliveryTimeline({ timeline }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
          Delivery progress
        </p>

        <h2 className="mt-1 text-lg font-bold text-slate-900">
          Track your order
        </h2>
      </div>

      <div>
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;

          return (
            <div key={item.id} className="flex">
              {/* Timeline column */}
              <div className="flex w-9 shrink-0 flex-col items-center">
                <StatusIcon item={item} />

                {!isLast && (
                  <div
                    className={`my-1 h-12 w-0.5 ${
                      item.completed ? "bg-emerald-400" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>

              {/* Timeline content */}
              <div className={`ml-4 flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-semibold ${
                          item.completed || item.current
                            ? "text-slate-900"
                            : "text-slate-400"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {item.current && (
                        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-indigo-600">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-[10px] font-medium text-slate-400">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* --------------------------------
   Order Summary
--------------------------------- */

function OrderSummary({ product, orderId }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Order summary
          </p>

          <h2 className="mt-1 text-lg font-bold text-slate-900">Your item</h2>
        </div>

        <span className="text-[10px] font-medium text-slate-400">
          #{orderId}
        </span>
      </div>

      <div className="flex gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-900">
            {product.name}
          </h3>

          <p className="mt-1 text-xs text-slate-400">{product.variant}</p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Qty: {product.quantity}
            </span>

            <span className="text-sm font-bold text-slate-900">
              {product.price}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        <span>View order details</span>

        <ChevronRight size={17} />
      </button>
    </section>
  );
}

/* --------------------------------
   Support Action
--------------------------------- */

function SupportAction({ order }) {
  const [submitted, setSubmitted] = useState(false);

  function handleAction() {
    setSubmitted(true);
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          <CircleHelp size={19} />
        </div>

        <div className="flex-1">
          <h2 className="text-sm font-bold text-slate-900">
            {order.action.label}
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {order.action.description}
          </p>

          {!submitted ? (
            <button
              type="button"
              onClick={handleAction}
              className="mt-4 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98]"
            >
              {order.action.label}
            </button>
          ) : (
            <div className="mt-4 rounded-xl bg-emerald-50 px-3 py-2.5 text-xs font-medium text-emerald-700">
              Your request has been submitted. We&apos;ll help you shortly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   State Selector
--------------------------------- */

function StateSelector({ orderState, setOrderState }) {
  const states = [
    {
      id: "trackingUnavailable",
      label: "No tracking",
    },
    {
      id: "delayed",
      label: "Delayed",
    },
    {
      id: "deliveredNotReceived",
      label: "Not received",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      <p className="px-2 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
        Preview state
      </p>

      <div className="grid grid-cols-3 gap-1">
        {states.map((state) => {
          const isActive = orderState === state.id;

          return (
            <button
              key={state.id}
              type="button"
              onClick={() => setOrderState(state.id)}
              className={`rounded-xl px-2 py-2.5 text-[11px] font-semibold transition ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {state.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------
   Main Component
--------------------------------- */

export default function OrderTracking() {
  const [orderState, setOrderState] = useState("delayed");

  // IMPORTANT:
  // This is the ONLY `order` variable in this file.
  const order = orders[orderState];

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 py-5 sm:py-8">
      <div className="mx-auto w-full max-w-[430px]">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            <ArrowLeft size={18} />

            <span>Orders</span>
          </button>

          <span className="text-xs font-medium text-slate-400">{order.id}</span>
        </header>

        {/* Page title */}
        <div className="mt-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Order tracking
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            Where&apos;s my order?
          </h1>
        </div>

        {/* State selector */}
        <div className="mt-5">
          <StateSelector
            orderState={orderState}
            setOrderState={setOrderState}
          />
        </div>

        {/* Main content */}
        <div className="mt-4 space-y-4">
          <StatusCard order={order} />

          <DeliveryTimeline timeline={order.timeline} />

          <OrderSummary product={order.product} orderId={order.id} />

          <SupportAction order={order} />
        </div>

        {/* Footer */}
        <p className="py-6 text-center text-[11px] text-slate-400">
          Order tracking information is updated automatically.
        </p>
      </div>
    </main>
  );
}
