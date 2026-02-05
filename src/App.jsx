import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PageLoader from './components/PageLoader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Perspectives = lazy(() => import('./pages/Perspectives'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Documents = lazy(() => import('./pages/Documents'));
const Reports = lazy(() => import('./pages/Reports'));
const Users = lazy(() => import('./pages/Users'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
