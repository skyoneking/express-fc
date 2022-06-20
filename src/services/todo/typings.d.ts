declare namespace API {
  type CreateStrategyDto = {
    name: string;
    launchTime: string;
    period: string;
  };

  type CreateTodoDto = {
    title: string;
    type: string;
    status: string;
    startTime: string;
  };

  type CreateUserDto = {
    username: string;
    password: string;
  };

  type LoginUserDto = {
    username: string;
    password: string;
  };

  type Strategy = {
    id: number;
    name: string;
    launchTime: string;
    period: string;
    createTime: number;
  };

  type StrategyControllerFindOneParams = {
    id: string;
  };

  type StrategyControllerRemoveParams = {
    id: string;
  };

  type StrategyListRes = {
    success: boolean;
    data: Strategy[];
  };

  type StrategyRes = {
    success: boolean;
    data: Strategy;
  };

  type Todo = {
    id: number;
    title: string;
    type: string;
    status: string;
    startTime: string;
    createTime: number;
    strategyId: number;
  };

  type TodoControllerDeleteParams = {
    id: string;
  };

  type TodoControllerFindOneParams = {
    id: string;
  };

  type TodoListRes = {
    success: boolean;
    data: Todo[];
  };

  type TodoRes = {
    success: boolean;
    data: Todo;
  };

  type UpdateStrategyDto = {
    id: number;
    name: string;
    launchTime: string;
    period: string;
  };

  type UpdateTodoDto = {
    id: number;
    title: string;
    type: string;
    status: string;
    startTime: string;
  };

  type UpdateUserDto = {
    id: number;
    username: string;
    password: string;
  };

  type User = {
    id: number;
    username: string;
    password: string;
    createTime: number;
    todos: string[];
  };

  type UserListRes = {
    success: boolean;
    data: User[];
  };

  type UserRes = {
    success: boolean;
    data: User;
  };

  type UsersControllerDeleteParams = {
    id: string;
  };

  type UsersControllerFindOneByNameParams = {
    username: string;
  };

  type UsersControllerFindOneParams = {
    id: string;
  };
}
