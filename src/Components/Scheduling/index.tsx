import React, { useState, useEffect } from "react";
import api from "../../config/api";
import axios from "axios";
import "./index.css";

interface Scheduling {
  id: string;
  date: string;
  statusDescription: string;
  startTime: string;
  endTime: string;
}

export const SchedulingC: React.FC = () => {
  const [scheduling, setScheduling] = useState<Scheduling[]>([]);
  const id = localStorage.getItem("id");
  useEffect(() => {
    api.get(`/appointment/user/${id}`).then((response) => {
      var reposta = response.data;
      setScheduling(reposta);
    });
  }, []);

  return (
    <div className="scheduling">
      <div className="containerr">
        <div className="scheduling-title">
          <h1>Agendamentos</h1>
        </div>
        <div className="scheduling-list">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {scheduling.map((scheduling) => (
                <tr key={scheduling.id}>
                  <td>{scheduling.date}</td>
                  <td>
                    {scheduling.startTime} - {scheduling.endTime}
                  </td>
                  <td>{scheduling.statusDescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
