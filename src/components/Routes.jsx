import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Sites from '../pages/sites'
import Partners from '../pages/partners'
import Vacancy from '../pages/vacancy'
import UniversitySites from '../pages/university-sites'
import DoubleDegreePrograms from '../pages/double-degree-programs/double-degree-programs'
import Section from '../pages/sections/section'
import Employees from '../pages/employees/employees'
import Rectors from '../pages/rectors/rectors'
import Departments from '../pages/departments/departments'
import VirtualLobby from '../pages/virtual-lobby/virtual-lobby'
import Faq from '../pages/faq/faq'
import Address from '../pages/address/address'
import Faculty from '../pages/faculty/faculty'
import AddRector from '../pages/rectors/addRector'
import EditRector from '../pages/rectors/editRector'
import SectionsAdd from '../pages/sections/sections-add'
import News from '../pages/news/news'
import AddNews from '../pages/news/addNews'
import EditNews from '../pages/news/editNews'
import Gallery from '../pages/gallery/index'
import AddDepartments from '../pages/departments/add-departments'
import EditDepartments from '../pages/departments/edit-departments'
import SectionsEdit from '../pages/sections/edit-section'
import FacultyAdd from '../pages/faculty/faculty-add'
import FacultyEdit from '../pages/faculty/faculty-edit'
import AddEmployee from '../pages/employees/add-employes'
import EditEmployee from '../pages/employees/edit-employes'
import Info from '../pages/info/info'
import VirtualLobbyEdit from '../pages/virtual-lobby/virtual-lobby-edit'
import Activity from '../pages/activity/activity'
import ActivityEdit from '../pages/activity/edit-activity'
import ActivityAdd from '../pages/activity/add-activity'
import StudentsAdd from '../pages/prospective-students/add-prospective-students'
import ProspectiveStudents from '../pages/prospective-students/prospective-students'
import StudentsEdit from '../pages/prospective-students/edit-prospective-students'
import Admission from '../pages/admission/admisson'
import AdmissionEdit from '../pages/admission/edit-admisson'
import AdmissionAdd from '../pages/admission/add-admission'
import DocumentsAdd from '../pages/documents/add-documents'
import DocumentsEdit from '../pages/documents/edit-documents'
import Documents from '../pages/documents/documents'
import EditFaq from '../pages/faq/edit-faq'
import EducationDocs from '../pages/education-docs/education-docs'
import EducationDocsAdd from '../pages/education-docs/education-docs-add'
import EducationDocsEdit from '../pages/education-docs/education-docs-edit'
import Settings from '../pages/settings'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/sites" component={Sites} />
      <Route path="/partners" component={Partners} />
      <Route path="/vacancy" component={Vacancy} />
      <Route path="/university-sites" component={UniversitySites} />
      <Route path="/double-degree-programs" component={DoubleDegreePrograms} />
      <Route path="/faculty-add" component={FacultyAdd} />
      <Route path="/faculty-edit/:id" component={FacultyEdit} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/sections" component={Section} />
      <Route path="/sections-add" component={SectionsAdd} />
      <Route path="/sections-edit/:id" component={SectionsEdit} />
      <Route path="/employees" component={Employees} />
      <Route path="/employee-add" component={AddEmployee} />
      <Route path="/employee-edit/:id" component={EditEmployee} />
      <Route path={'/rectors'} component={Rectors} />
      <Route path={'/rectors-add'} component={AddRector} />
      <Route path={'/rectors-edit/:id'} component={EditRector} />
      <Route path={'/virtual-lobby'} component={VirtualLobby} />
      <Route path={'/virtual-lobby-edit/:id'} component={VirtualLobbyEdit} />
      <Route path={'/faq'} component={Faq} />
      <Route path={'/edit-faq/:id'} component={EditFaq} />
      <Route path={'/address'} component={Address} />
      <Route path="/news" component={News} />
      <Route path="/news-add" component={AddNews} />
      <Route path="/news-edit/:id" component={EditNews} />
      <Route path="/departments" component={Departments} />
      <Route path="/departments-add" component={AddDepartments} />
      <Route path="/departments-edit/:id" component={EditDepartments} />
      <Route path={'/info'} component={Info} />
      <Route path={'/activity'} component={Activity} />
      <Route path={'/activity-edit/:id'} component={ActivityEdit} />
      <Route path={'/activity-add'} component={ActivityAdd} />
      <Route path={'/prospective-students'} component={ProspectiveStudents} />
      <Route path={'/prospective-students-add'} component={StudentsAdd} />
      <Route path={'/prospective-students-edit/:id'} component={StudentsEdit} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/admission" component={Admission} />
      <Route path="/admission-edit/:id" component={AdmissionEdit} />
      <Route path="/admission-add" component={AdmissionAdd} />
      <Route path="/documents-add" component={DocumentsAdd} />
      <Route path="/documents-edit/:id" component={DocumentsEdit} />
      <Route path="/documents" component={Documents} />
      <Route path={'/education-docs'} component={EducationDocs} />
      <Route path={'/education-docs-add'} component={EducationDocsAdd} />
      <Route path={'/education-docs-edit/:id'} component={EducationDocsEdit} />
      <Route path={'/settings'} component={Settings} />
    </Switch>
  )
}

export default Routes
