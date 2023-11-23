
  import { faBell, faChartColumn, faDashboard, faMotorcycle, faPerson } from '@fortawesome/free-solid-svg-icons'


export const Sidelinks =[
    {
        Name: "Dashboard",
         to :"/",
         icon :faDashboard
    },

    {
        Name: "Employees",
         to :"/Employees",
         icon : faPerson
    },

    {
        Name: "Deliveries",
         to :"/Deliveries",
         icon : faMotorcycle
    },

    {
        Name: "Stats",
         to :"/Stats",
         icon : faChartColumn
    },

    {
        Name: "Notification",
         to :"/Notification",
         icon : faBell
    },
]