import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { Building, Users, BookOpen, ArrowRight, Mail } from '../components/Icons.jsx';
import { useSite } from '../context/SiteContext.jsx';
import './DepartmentsPage.css';

const DepartmentDetailPage = () => {
  const { slug } = useParams();
  const { data } = useSite();
  const { departments, staff } = data;

  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return <Navigate to="/departments" replace />;
  }

  const deptStaff = staff.filter((s) => s.department === department.name);

  return (
    <div className="page-wrapper department-detail-page">
      <Breadcrumbs 
        items={[
          { label: 'Departments', link: '/departments' },
          { label: department.name }
        ]} 
      />

      <section className="page-header-banner" aria-labelledby="dept-detail-title">
        <div className="container">
          <span className="banner-subtitle">{department.faculty}</span>
          <h1 id="dept-detail-title" className="banner-title">{department.name}</h1>
          <p className="banner-lead">
            Head of Department: {department.hod} &bull; {department.staffCount} Faculty Members
          </p>
        </div>
      </section>

      <div className="container dept-detail-layout">
        <main className="dept-main-col">
          <section className="dept-block">
            <h2>Department Profile &amp; Mission</h2>
            <p>{department.description}</p>
          </section>

          <section className="dept-block">
            <h2>Curriculum Streams &amp; Subjects Managed</h2>
            <ul className="dept-streams-list">
              {department.programmes.map((p, idx) => (
                <li key={idx} className="stream-item">
                  <BookOpen size={16} className="stream-icon" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="dept-block">
            <h2>Instructors &amp; Laboratory Staff</h2>
            {deptStaff.length > 0 ? (
              <div className="dept-staff-cards">
                {deptStaff.map((st) => (
                  <div key={st.id} className="staff-micro-card">
                    <img src={st.image} alt={st.name} className="staff-micro-img" />
                    <div>
                      <strong>{st.name}</strong>
                      <span className="staff-pos">{st.position}</span>
                      <small>{st.qualifications}</small>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">Staff assigned on rotational subject schedules. See full Staff Directory.</p>
            )}
          </section>
        </main>

        <aside className="dept-side-col">
          <div className="hod-card">
            <h3>Head of Department</h3>
            <div className="hod-content">
              <h4>{department.hod}</h4>
              <p>Oversees laboratory timetables, curriculum fidelity, and candidate continuous assessment.</p>
              <Link to="/contact" className="btn-contact-hod">
                Contact Department &rarr;
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DepartmentDetailPage;

