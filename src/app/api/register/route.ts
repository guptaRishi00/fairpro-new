export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Prepare data for Google Apps Script
    const params = new URLSearchParams();
    params.append("user_name", formData.get("user_name") as string);
    params.append("user_email", formData.get("user_email") as string);
    params.append("user_phone", formData.get("user_phone") as string);

    // ✅ Your Google Apps Script Web App URL
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyaAlwC5ja1OUlOxnvB9j4jK1TnsiC8sGpLrmVTsx8-y2UFcSKJGSYVWKTkzHfmeXXGqA/exec";

    // Send POST request to Google Script
    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      body: params,
    });

    const text = await res.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = { result: "unknown", raw: text };
    }

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        result: "error",
        message: error.toString(),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
