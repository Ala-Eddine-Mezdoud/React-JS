import React from 'react';
// import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart2,Archive, ShoppingBag, Users, DollarSign, ShoppingCart, TrendingUp, Settings, Menu } from 'react-feather';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

export const SideBar = () => {
    let [isOpen, setIsOpen] = React.useState(true);

    return (
        <motion.div 
        initial={{ width: 256 }}
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ duration: 0.3 }} 
        className={`h-screen bg-gray-800 relative z-10 transition-all duration-75 ease-in-out flex-shrink-0 `}>

            <div className='  items-start m-0 bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit text-white'
                    >
                        <Menu size={24} />
                    </motion.button>
            </div>

            <nav >
                <motion.div >

                    {SIDEBAR_ITEMS.map((item, index) => (
                        <Link key={index} to={item.href} className='flex items-center  p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                            <item.icon size={24} color={item.color} />
                            <AnimatePresence>
                                {isOpen &&
                                <motion.span initial={{ opacity:0 , width:0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='ml-4 text-white'>
                                    {item.name}
                                </motion.span>}
                            </AnimatePresence>
                        </Link>
                    ))}
                </motion.div>

            </nav>
        </motion.div>
    );
};
