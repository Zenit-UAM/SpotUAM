import { navigate } from "../Link";
import DashboardIcon from "../components/icons/DashboardIcon"
import CalendarIcon from "../components/icons/CalendarIcon";
import CalendarAddIcon from "../components/icons/CalendarAddIcon"
import HistoryIcon from "../components/icons/HistoryIcon"
import HelpCenterIcon from "../components/icons/HelpCenterIcon"
import LogoutIcon from "../components/icons/LogoutIcon"

export default function DashboardLayout() {
  return (
    <div>
        <header>
            <h2>UAM Cuajimalpa</h2>
            <small>SpotUAM</small>
        </header>
        <main>
            <div>
                <button
                    onClick={()=>{navigate("/dashboard")}}
                    className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
                >
                    <DashboardIcon
                        className="w-5 h-5 text-black group-hover:text-primary/80"
                    />
                    Dashboard</button>
            </div>
            <div>
                <button
                    onClick={()=>{navigate("/reservar")}}
                    className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
                >
                    <CalendarAddIcon
                        className="w-5 h-5 text-black group-hover:text-primary/80"
                    />
                    Reservar</button>
            </div>
            <div>
                <button
                    onClick={()=>{navigate("/mis-reservas")}}
                    className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
                >
                <HistoryIcon
                    className="w-5 h-5 text-black group-hover:text-primary/80"
                />
                Mis Reservas</button>
            </div>
            <div>
                <button
                    onClick={()=>{navigate("/calendario")}}
                    className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
                ><CalendarIcon
                    className="w-5 h-5 text-black group-hover:text-primary/80"
                />Calendario</button>
            </div>
            <div>
                <button
                    onClick={()=>{navigate("/ayuda")}}
                    className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
                    >
                    <HelpCenterIcon
                        className="w-5 h-5 text-black group-hover:text-primary/80"
                    />
                    Ayuda</button>
            </div>
        </main>
        <footer>
            <button
                onClick={()=>{navigate("/logout-user")}}
                className="group flex items-center gap-2 px-4 py-2 rounded text-black hover:bg-primary/20 hover:text-primary/80 transition"
            >
                <LogoutIcon
                    className="w-5 h-5 text-black group-hover:text-primary/80"
                />
                 Cerrar Sesión</button>
        </footer>
    </div>
  );
}
