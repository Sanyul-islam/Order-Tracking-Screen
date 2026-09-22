export const orders = {
  delayed: {
    id: "ORD-28491",
    state: "delayed",

    product: {
      name: "Wireless Noise Cancelling Headphones",
      variant: "Midnight Black",
      quantity: 1,
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    },

    status: {
      label: "Order delayed",
      description:
        "Your order is taking longer than expected. We are working to get it to you as soon as possible.",
    },

    delivery: {
      label: "Updated delivery estimate",
      date: "September 26, 2026",
      time: "Before 8:00 PM",
    },

    action: {
      label: "Contact support",
      description:
        "Need help with the delay? Our support team can check the latest delivery information.",
    },

    timeline: [
      {
        id: "processing",
        title: "Processing",
        description: "Order confirmed",
        date: "Sep 20",
        completed: true,
        current: false,
      },
      {
        id: "shipped",
        title: "Shipped",
        description: "Package left the fulfillment center",
        date: "Sep 21",
        completed: true,
        current: false,
      },
      {
        id: "outForDelivery",
        title: "Out for Delivery",
        description: "Delivery has been delayed",
        date: "Today",
        completed: false,
        current: true,
      },
      {
        id: "delivered",
        title: "Delivered",
        description: "Waiting for delivery",
        date: "Pending",
        completed: false,
        current: false,
      },
    ],
  },

  deliveredNotReceived: {
    id: "ORD-28491",
    state: "delivered-not-received",

    product: {
      name: "Wireless Noise Cancelling Headphones",
      variant: "Midnight Black",
      quantity: 1,
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    },

    status: {
      label: "Marked as delivered",
      description:
        "The carrier says your package was delivered, but you reported that you did not receive it.",
    },

    delivery: {
      label: "Delivery recorded",
      date: "September 23, 2026",
      time: "Delivered at 2:34 PM",
    },

    action: {
      label: "Report delivery issue",
      description:
        "If you cannot find your package, report the issue and our support team will help.",
    },

    timeline: [
      {
        id: "processing",
        title: "Processing",
        description: "Order confirmed",
        date: "Sep 20",
        completed: true,
        current: false,
      },
      {
        id: "shipped",
        title: "Shipped",
        description: "Package left the fulfillment center",
        date: "Sep 21",
        completed: true,
        current: false,
      },
      {
        id: "outForDelivery",
        title: "Out for Delivery",
        description: "Package was on its way",
        date: "Sep 23",
        completed: true,
        current: false,
      },
      {
        id: "delivered",
        title: "Delivered",
        description: "September 23 · 2:34 PM",
        date: "Today",
        completed: true,
        current: true,
      },
    ],
  },

  trackingUnavailable: {
    id: "ORD-29102",
    state: "tracking-unavailable",

    product: {
      name: "Premium Everyday Backpack",
      variant: "Forest Green",
      quantity: 1,
      price: "$64.99",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    },

    status: {
      label: "Tracking isn't available yet",
      description:
        "Your order has been confirmed. Tracking information will appear once your package has been shipped.",
    },

    delivery: {
      label: "Estimated delivery",
      date: "September 28–30, 2026",
      time: "We'll update you when it ships",
    },

    action: {
      label: "View order details",
      description:
        "You can still view your order details while tracking information is being prepared.",
    },

    timeline: [
      {
        id: "processing",
        title: "Processing",
        description: "Order confirmed",
        date: "Today",
        completed: true,
        current: false,
      },
      {
        id: "shipped",
        title: "Shipped",
        description: "Tracking will appear after shipment",
        date: "Pending",
        completed: false,
        current: true,
      },
      {
        id: "outForDelivery",
        title: "Out for Delivery",
        description: "Waiting for shipment",
        date: "Pending",
        completed: false,
        current: false,
      },
      {
        id: "delivered",
        title: "Delivered",
        description: "Waiting for delivery",
        date: "Pending",
        completed: false,
        current: false,
      },
    ],
  },
};
