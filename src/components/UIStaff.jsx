import "../styles/components/UIStaff.scss";
import UIStaffCard from "./UIStaffCard";

export function UIStaff() {
  return (
    <div className="staff-content">
      <div className="staff-content-titles">
        <h2>Staff</h2>
        <p>Conocé al equipo de MK odonotología integral</p>
      </div>
      <div className="staff-content-proyects">
        <UIStaffCard
          image="https://medios.uchceu.es/actualidad-ceu/wp-content/uploads/sites/2/2020/07/maria-alumnaodontologiaceu-scaled.jpg"
          name="Vanina Minervini"
          description="Odontologa"
        />
        <UIStaffCard
          image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8e722e163875671.63ed25ed69c2e.jpeg"
          name="Diego Calabro"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
        />
       {/*  <UIStaffCard
          image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4ca56b163875703.63ed26088734a.jpeg"
          name="Odontologo 2"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
        /> */}
        <UIStaffCard
          image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/70e93b163875743.63ed262427deb.jpeg"
          name="Laura Diez"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
        />
        <UIStaffCard
          image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0ddf18163875795.63ed26438d409.jpeg"
          name="German Luques"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit a, nec curae
            molestie imperdiet nisl rhoncus turpis, sed tristique suspendisse
            massa felis in iaculis."
        />
      </div>
    </div>
  );
}
