import './App.scss';
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './componets/MainPage/MainPage';
import { UserStatics } from './componets/UserStatics/UserStatics';
import { SamuelFrost } from './componets/SamuelFrost/SamuelFrost';

function App() {
  const [selectedUser, setSelectedUser] = useState(1)
  
  return (
    <div>
      <Switch>
        <Route path="/UserStatics">
          <UserStatics
            setSelectedUser={setSelectedUser}
          />
        </Route>
  
        <Route path="/SamuelFrost">
          <SamuelFrost
            selectedUser={selectedUser}
          />
        </Route>
  
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
