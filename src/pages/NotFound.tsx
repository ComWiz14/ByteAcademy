import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#0B0B0F] text-zinc-100 min-h-[80vh] flex items-center justify-center transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center flex flex-col gap-6">
        
        {/* Animated Icon Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="w-20 h-20 bg-rose-500/10 text-[#FF0800] rounded-2xl flex items-center justify-center mx-auto shadow-md"
        >
          <Terminal className="w-10 h-10" />
        </motion.div>

        {/* Text Error Block */}
        <div>
          <span className="text-xs font-black tracking-widest text-[#FF0800] uppercase font-mono">ERROR_404_NOT_FOUND</span>
          <h1 className="text-3xl font-black text-white mt-1">Route Terminated</h1>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-sm mx-auto">
            The target location does not contain valid Java bytecode or active handlers. The system returned an unmapped exception request.
          </p>
        </div>

        {/* Terminal Sandbox code block */}
        <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-left font-mono text-xs text-zinc-500">
          <span className="text-rose-500 font-bold">java.lang.NullPointerException</span>
          <div className="text-[10px] text-zinc-450 mt-1 pl-3">
            at com.byteacademy.RouteRegistry.resolvePath(Line 404)
            <br />
            at com.byteacademy.CoreEngine.bootstrap(Line 99)
            <br />
            at com.byteacademy.Main.main(Line 12)
          </div>
          <div className="text-[#FF0800] font-bold text-[10px] mt-2 animate-pulse">
            // STATUS: PROCESS TERMINATED WITH EXIT CODE 404
          </div>
        </div>

        {/* Action Pathways */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/learn-java"
            className="px-5 py-3 bg-[#FF0800] hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Syllabus</span>
          </Link>
          <Link
            to="/"
            className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Go Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
