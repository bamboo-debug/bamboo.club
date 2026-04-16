export default function TestEnv() {
  return (
    <pre style={{ padding: 40 }}>
      {JSON.stringify(
        {
          cwd: process.cwd(),
          nodeEnv: process.env.NODE_ENV,
          url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? null,
          anon: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "OK" : null,
          service: process.env.SUPABASE_SERVICE_ROLE_KEY ? "OK" : null,
        },
        null,
        2
      )}
    </pre>
  );
}