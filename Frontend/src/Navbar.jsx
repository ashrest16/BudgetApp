import { Link } from "react-router-dom"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
function Navbar(){
    return (
        <div className="flex flex-row justify-between items-center border-b p-4">
        <div className="flex items-center">
          <span className="text-3xl mr-6">Budgeting App</span>
          <Link to="/" className="ml-4 text-xl font-bold hover:text-blue-400">
            Home
          </Link>
          <Link to="/transaction" className="ml-4 text-xl font-bold hover:text-blue-400">
            Transaction
          </Link>
          <Link to="/budget" className="ml-4 text-xl font-bold hover:text-blue-400">
            Budget
          </Link>
          <Link to="/about" className="ml-4 text-xl font-bold hover:text-blue-400">
            About
          </Link>
        </div>
  
        <div className="flex items-center mr-6">
        <DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        Profile
        </DropdownMenuItem>
    <DropdownMenuItem>
        Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
      </div>
    );
}

export default Navbar