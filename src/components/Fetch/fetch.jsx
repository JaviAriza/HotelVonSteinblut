import useSWR from 'swr';

const fetcher = (url) => fetch(url, { mode: 'no-cors' }).then((res) => res.json());
const Fetch = () => {
    const {
      data: users,
      error,
      isValidating
    } = useSWR('https://www.jsondataai.com/api/s2yRyza', fetcher);


    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;


    return (
      <div>
        {users.map((user) => (
              <div key={user.id}>
              <p>Username: {user.username}</p>
              <p>gender: {user.gender}</p>
              <p>birthdate: {user.birthdate}</p>
              <p>number_guest: {user.number_guest}</p>
              <p>email: {user.email}</p>
              <p>phone: {user.phone}</p>
            </div>
          ))}
      </div>
    );
  };

  export default Fetch;