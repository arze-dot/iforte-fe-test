import CE_Header from "./$element/client.header";
import CE_PaymentList from "./$element/client.payment.list";
import CE_Sidebar from "./$element/client.sidebar";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:pt-10 bg-[#f5f5f5]">
      {/* Main Card */}
      <div className="w-full h-full lg:w-[900px] lg:h-[700px] lg:max-h-[800px] bg-white shadow-lg">
        <CE_Header />
        <div className="flex h-full lg:h-[600px] flex-col lg:flex-row">
          <CE_Sidebar />
          <div className="w-full lg:w-[700px] h-fit overflow-y-auto">
            <CE_PaymentList />
          </div>
          {/* Payment Details */}
        </div>
      </div>
    </main>
  );
}
