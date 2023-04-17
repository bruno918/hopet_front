import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../../config/api";
import DateInput from "../../Agenda";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import Swal from "sweetalert2";
interface PetshopData {
  id: number;
  name: string;
  picture: string;
  description: string;
  price: number;
}
interface Petshop {
  id: string;
  name: string;
  description: string;
  picture: string | null;
}

export const Services = () => {
  const [services, setServices] = useState<PetshopData[]>([]);

  const [petshop, setPetshop] = useState<Petshop>({} as Petshop);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const fetchServices = async () => {
      const response: any = await api.get(`/petshop/${id}`);
      setServices(response.data.services);
      setPetshop(response.data);
    };
    fetchServices();
  }, []);

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const handleSubmit = async (date: any) => {
    const userId = localStorage.getItem("id");
    if (!userId) {
      Swal.fire({
        title: "Erro !",
        text: "Você precisa estar logado para agendar um serviço",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Sucesso !",
        text: "Seu agendamento foi realizado com sucesso",
        icon: "success",
        confirmButtonText: "OK",
      });
    }

    const endDate = new Date(startDate.getTime() + 30 * 60000);
    const endTime =
      endDate.getHours() +
      ":" +
      endDate.getMinutes().toString().padStart(2, "0"); // obtém a hora e minutos do final
    const response = await api.post("/appointment", {
      date: startDate,
      startTime:
        startDate.getHours() +
        ":" +
        startDate.getMinutes().toString().padStart(2, "0"),
      endTime: endTime,
      status: 0,
      userId: userId,
    });
  };

  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Serviços Disponíveis</h2>
        <div className="pro-container">
          {services.map((service) => (
            <div className="pro" key={service.id}>
              <img className="service-image" src={service.picture} alt="" />
              <div className="des">
                <h5>{service.name}</h5>
                <span>{service.description}</span>
                <select>
                  <option>Preço: R$ {service.price}</option>
                </select>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  date && setStartDate(date);
                }}
                showTimeSelect
                timeFormat="HH:mm"
                injectTimes={[
                  setHours(setMinutes(new Date(), 1), 0),
                  setHours(setMinutes(new Date(), 5), 12),
                  setHours(setMinutes(new Date(), 59), 23),
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              {/*fazer o botão de agendar passsando os dados do agendamento que estão np datepicker */}
              <button
                className="buttonagenda"
                onClick={() => handleSubmit(startDate)}
              >
                Agendar
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
