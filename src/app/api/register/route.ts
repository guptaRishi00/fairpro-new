export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const params = new URLSearchParams();
    params.append("user_name", formData.get("user_name") as string);
    params.append("user_email", formData.get("user_email") as string);
    params.append("user_phone", formData.get("user_phone") as string);
    params.append("utmsource", formData.get("utmsource") as string);

    // --- THIS IS YOUR NEW, UPDATED URL ---
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxNo_FNrdT-jNhB16ui5TagKvtLvYfJI4ZBPVE1xrbLI7baoeKBqjDzaztVRSf5ITOf7Q/exec";
    // -------------------------------------

    const res = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // ✅ Important
      },
      body: params.toString(), // ✅ Convert URLSearchParams to string
    });

    console.log("response", res);

    const text = await res.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = { result: "unknown", raw: text };
    }

    console.log(data);

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
