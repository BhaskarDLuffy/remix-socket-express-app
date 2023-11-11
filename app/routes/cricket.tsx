import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function action({request}:ActionFunctionArgs) {
    const body  = await request.json();
    const mantra = body.mantra;
    return json({mantra})
}