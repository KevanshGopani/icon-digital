// import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import GiftVoucher from "@/components/GiftVoucher";

export const metadata: Metadata = {
    title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const ProductDetails = () => {
    return (
        <DefaultLayout>
            <GiftVoucher />
        </DefaultLayout>
    );
};

export default ProductDetails;
