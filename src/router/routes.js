import { Routes, Route } from "react-router-dom";
import ROUTE_NAMES from "./routeNames";
import CounterContainer from "../pages/ClassesContainer/ClassesContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/FunctionalContainer";
import Home from "../pages/Home";
import ListsContainer from "../pages/Lists/container/ListsContainer";
import CounterOfCounters from "../pages/CounterOfCounters/CounterOfCountersContainer/CounterOfCounters";
import FormContainer from "../pages/Forms/FormContainer/FormContainer";
import ReduxCountersContainer from "../pages/ReduxCounters/ReduxCountersContainer/ReduxCountersContainer";
import ReduxToDoListContainer from "../pages/ReduxToDoList/ReduxToDoListContainer/ReduxToDoListContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route
        path={ROUTE_NAMES.Classes_COUNTER}
        element={<CounterContainer />}
      />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      <Route
        path={ROUTE_NAMES.Counter_Manager_HW2}
        element={<CounterOfCounters />}
      />
      <Route path={ROUTE_NAMES.Forms} element={<FormContainer />} />
      <Route
        path={ROUTE_NAMES.ReduxCounters}
        element={<ReduxCountersContainer />}
      />
      <Route
        path={ROUTE_NAMES.ToDoList_HW3}
        element={<ReduxToDoListContainer />}
      />
    </Routes>
  );
};

export default Router;
