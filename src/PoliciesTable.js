import { useState, useEffect } from 'react';
import './PoliciesTable.css';

const PoliciesTable = () => {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('http://192.168.2.113/api/Policy', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPolicies(data); // Assuming API returns an array of policies
    } catch (error) {
      console.error('Error fetching policies:', error);
      setError('Error fetching policies. Please try again.');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
<div className="table-container">
      <h2>Policies</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Policy Type</th>
            <th>Policy Number</th>
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {policies.map(policyholder => (
            <tr key={policyholder.id}>
              <td>{`${policyholder.firstName} ${policyholder.lastName}`}</td>
              <td>{policyholder.email}</td>
              <td>{policyholder.phoneNumber}</td>
              <td>
                {policyholder.policies.map(policy => (
                  <div key={policy.id}>
                    {policy.policyType}
                  </div>
                ))}
              </td>
              <td>
                {policyholder.policies.map(policy => (
                  <div key={policy.id}>
                    {policy.policyNumber}
                  </div>
                ))}
              </td>
              <td>
                {policyholder.vehicles.length > 0 ? (
                  policyholder.vehicles[0].make
                ) : (
                  'No Vehicle'
                )}
              </td>
              <td>
                {policyholder.vehicles.length > 0 ? (
                  policyholder.vehicles[0].model
                ) : (
                  '-'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PoliciesTable;
