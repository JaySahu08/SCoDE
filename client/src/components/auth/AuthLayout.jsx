
import { Code2 } from "lucide-react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex">
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 bg-gradient-to-br from-[#151D35] to-[#0B1020]">
        <div className="flex items-center gap-3">
          <Code2 className="text-indigo-400" size={30} />
          <span className="text-xl font-bold tracking-tight">CodeRoom</span>
        </div>

        <div className="max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Learn together.
            <br />
            Build together.
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            A collaborative coding classroom where teachers guide and
            students learn by writing code together.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          Collaborative learning, one line at a time.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <Code2 className="text-indigo-400" size={26} />
            <span className="text-lg font-bold">CodeRoom</span>
          </div>

          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-slate-400 mt-2 mb-8">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
