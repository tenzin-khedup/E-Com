// app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-16 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Samten's Carpet Industry.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Personal Information We Collect</h2>
          <p>
            When you visit the our Site, we automatically collect certain information about your device, including information about your web browser, IP address, and time zone.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">How We Use Your Personal Information</h2>
          <p>
            We use the Order Information that we collect generally to fulfill any orders placed through the our Site (including processing your payment information, arranging for shipping, providing you with invoices and order confirmations).
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4">Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted.
          </p>
        </div>
      </div>
    </div>
  );
}