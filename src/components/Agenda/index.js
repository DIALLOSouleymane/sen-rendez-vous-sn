/*
    Nous utilisons la page comme un composant client (client component)
*/
"use client" ;
import './index.scss';
import { 
            Day, Inject, Month, 
            MonthAgenda, 
            ScheduleComponent, ViewDirective, 
            ViewsDirective, Week, WorkWeek 
        } from "@syncfusion/ej2-react-schedule";

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhNYVRpR2Nbe05xdF9GYVZQQWYuP1ZhSXxXdkZjUX5ecHVUQGNYVUU="
);

/*
    Nous utilisons des données locales, codées en dur pour des besoins d'implémentation et de paramètrage.
    Nous les remplacerons plus tard par de données distantes provenant soit
    de notre base de données, soit d'une API.
*/
const data = [
    {
        Id: 1,
        Subject: "Entretien Technique",
        StartTime: new Date(2024, 3, 8, 17, 0),
        EndTime: new Date(2024, 3, 8, 17, 30),
        IsAllDay: false
    },
    {
        Id: 2,
        Subject: "Prise de Conseil",
        StartTime: new Date(2024, 3, 8, 15, 0),
        EndTime: new Date(2024, 3, 8, 17, 0),
        IsAllDay: false
    },
    {
        Id: 3,
        Subject: "Discussion Projet",
        StartTime: new Date(2024, 3, 20, 16, 0),
        EndTime: new Date(2024, 3, 20, 17, 0),
        IsAllDay: false
    },
    {
        Id: 4,
        Subject: "Prise de conseil",
        StartTime: new Date(2024, 3, 13, 13, 0),
        EndTime: new Date(2024, 3, 13, 14, 0),
        IsAllDay: false
    },
    {
        Id: 5,
        Subject: "Présentation avec Pr Ouya",
        StartTime: new Date(2024, 3, 13, 13, 0),
        EndTime: new Date(2024, 3, 13, 14, 0),
        IsAllDay: true,
        Status: "Completed",
        Priority: "High"
    },
];

export default function Agenda() {

    return (
        <main className='flex justify-center items-center min-h-screen'>
            <ScheduleComponent 
                width={800}
                height={500}
                eventSettings={{
                    dataSource: data
                }}
                // selectedDate={new Date(2024, 3, 25)}
                // currentView='Month'
            >
                <ViewsDirective>
                    <ViewDirective option='Day' />
                    <ViewDirective option='Week' />
                    <ViewDirective option='Month' />
                    <ViewDirective option='WorkWeek' />
                    <ViewDirective option='MonthAgenda' />
                </ViewsDirective>

                <Inject services={[Day, Week, Month, WorkWeek, MonthAgenda]} />
            </ScheduleComponent>
        </main>
    );
}