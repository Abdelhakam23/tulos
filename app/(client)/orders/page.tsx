import { RequirderUser } from "@/hooks/requiredUser";
import React from "react";

const OrdersPage = async () => {
  await RequirderUser();
  return <div>OrdersPage</div>;
};

export default OrdersPage;
