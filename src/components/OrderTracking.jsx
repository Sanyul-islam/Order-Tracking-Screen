"use client";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Package,
  Truck,
} from "lucide-react";

const order = {
  id: "ORD-28491",
  product: {
    name: "Wireless Noise Cancelling Headphones",
    variant: "Midnight Black",
    quantity: 1,
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  estimatedDelivery: "Sep 25, 2026",
  deliveryTime: "Before 8:00 PM",
};

const statuses = [
  {
    id: "processing",
    title: "Processing",
    description: "Your order has been confirmed",
    date: "Sep 20, 2026",
  },
  {
    id: "shipped",
    title: "Shipped",
    description: "Package left the fulfillment center",
    date: "Sep 21, 2026",
  },
  {
    id: "out-for-delivery",
    title: "Out for Delivery",
    description: "Your package is on its way to you",
    date: "Today",
  },
  {
    id: "delivered",
    title: "Delivered",
    description: "Package delivered successfully",
    date: "Pending",
  },
];

const currentStatus = "out-for-delivery";

function StatusIcon({ status, isCompleted, isCurrent }) {
  if (isCompleted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check size={17} strokeWidth={3} />
      </div>
    );
  }

  if (isCurrent) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-200">
        {status === "out-for-delivery" ? (
          <Truck size={17} />
        ) : (
          <Package size={17} />
        )}
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 bg-white">
      <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
    </div>
  );
}

function DeliveryTimeline() {
  const currentIndex = statuses.findIndex((item) => item.id === currentStatus);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
          Delivery progress
        </p>

        <h2 className="mt-1 text-lg font-bold text-slate-900">
          Track your order
        </h2>
      </div>

      <div>
        {statuses.map((item, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isLast = index === statuses.length - 1;

          return (
            <div key={item.id} className="flex">
              {/* Timeline line */}
              <div className="flex w-9 flex-col items-center">
                <StatusIcon
                  status={item.id}
                  isCompleted={isCompleted}
                  isCurrent={isCurrent}
                />

                {!isLast && (
                  <div
                    className={`my-1 h-12 w-[2px] ${
                      index < currentIndex ? "bg-emerald-400" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`${isLast ? "pb-0" : "pb-6"} ml-4 flex-1`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-semibold ${
                          isCurrent || isCompleted
                            ? "text-slate-900"
                            : "text-slate-400"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {isCurrent && (
                        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-indigo-600">
                          Current
                        </span>
                      )}
                    </div>

                    <p
                      className={`mt-1 text-xs leading-5 ${
                        isCurrent || isCompleted
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
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

function StatusCard() {
  return (
    <section className="rounded-3xl bg-indigo-600 p-5 text-white shadow-lg shadow-indigo-100">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-indigo-100">
              Current status
            </p>
          </div>

          <h1 className="mt-3 text-2xl font-bold tracking-tight">
            Out for Delivery
          </h1>

          <p className="mt-2 max-w-[280px] text-sm leading-5 text-indigo-100">
            Your package is on its way and should arrive today.
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
          <Truck size={22} />
        </div>
      </div>

      <div className="mt-5 border-t border-white/15 pt-4">
        <div className="flex items-center gap-2 text-indigo-100">
          <Clock3 size={15} />

          <span className="text-xs">Estimated delivery</span>
        </div>

        <p className="mt-1 text-sm font-semibold text-white">
          Today, before 8:00 PM
        </p>
      </div>
    </section>
  );
}

function OrderSummary() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Order summary
          </p>

          <h2 className="mt-1 text-lg font-bold text-slate-900">Your item</h2>
        </div>

        <span className="text-xs text-slate-400">#{order.id}</span>
      </div>

      <div className="flex gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={order.product.image}
            alt={order.product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-900">
            {order.product.name}
          </h3>

          <p className="mt-1 text-xs text-slate-400">{order.product.variant}</p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Qty: {order.product.quantity}
            </span>

            <span className="text-sm font-bold text-slate-900">
              {order.product.price}
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

function SupportCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          <CircleHelp size={19} />
        </div>

        <div className="flex-1">
          <h2 className="text-sm font-bold text-slate-900">
            Need help with your delivery?
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Our support team can help with delivery questions or issues.
          </p>

          <button
            type="button"
            className="mt-4 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98]"
          >
            Contact support
          </button>
        </div>
      </div>
    </section>
  );
}

export default function OrderTracking() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-5">
      <div className="mx-auto w-full max-w-[430px]">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          >
            <ArrowLeft size={18} />
            Orders
          </button>

          <span className="text-xs font-medium text-slate-400">{order.id}</span>
        </header>

        {/* Page heading */}
        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Order tracking
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            Where&apos;s my order?
          </h1>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-4">
          <StatusCard />

          <DeliveryTimeline />

          <OrderSummary />

          <SupportCard />
        </div>

        <p className="py-6 text-center text-[11px] text-slate-400">
          Order placed on September 20, 2026
        </p>
      </div>
    </main>
  );
}
