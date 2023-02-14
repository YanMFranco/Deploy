import axios from "axios";

export const GET_CIUDADES = "GET_CIUDADES";
export const GET_PORNOMBRE = "GET_PORNOMBRE";
export const ORDER_FILTROS = "ORDER_FILTROS";
export const GET_CIUDADDETALLE = "GET_CIUDADDETALLE";
export const GET_TODO = "GET_TODO";

export const getCiudades = (page) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/Paises?page=${page}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_CIUDADES, payload: data }));
  };
};

export const getPor_Nombre = (page, search) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/Paises?page=${page}&nombre=${search}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_PORNOMBRE, payload: data }));
  };
};

export const orderFiltros = (page,orderA_Z,orderP,orderC) => {
  orderA_Z = orderA_Z.toUpperCase();
  orderP = orderP.toUpperCase();
  var ordenA = !orderA_Z?"":`&fA_Z=${orderA_Z}`; 
  var ordenPo = !orderP?"":`&fPo=${orderP}`;
  var ordenCo = !orderC?"":`&fCo=${orderC}`;

  return function (dispatch) {
    axios
      .get(`http://localhost:3001/filtros?page=${page}${ordenPo}${ordenA}${ordenCo}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: ORDER_FILTROS, payload: data }));
  };
}

export const getCiudadDetalle = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/Paises/${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_CIUDADDETALLE, payload: data }));
  };
}

export const getTodo = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/todo`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_TODO, payload: data }));
  };
};

export const crear_Actividad = ({ input }) => {
  return async function () {
    const res = await axios.post(`http://localhost:3001/activities`, input)
    console.log(res.data);
  }
}