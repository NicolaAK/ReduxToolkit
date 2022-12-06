import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/UserSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  });
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user) => (
        <div>
          {user.id}. {user.name} 
        </div>
      ))}
    </div>
  );
}

export default App;
