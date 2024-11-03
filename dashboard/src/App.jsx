import { Routes ,Route, Link, BrowserRouter } from "react-router-dom"
import { Contact } from "./Contact";
import { SideBar } from "./common/SideBar";
import { OverView } from "./pages/OverView";
import { Products } from "./pages/Products";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* BG */}
			<div className='fixed inset-0 -z-10'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

      <SideBar />

      <div className="flex-1 overflow-auto">
      <Routes>
        <Route path="/" element={<OverView />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      </div>
    </div>
  )
}