import { CommonActions } from "@react-navigation/native";

const resetStackAndNavigate = (navigation, path) => {
    navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: path }] })
    );
};

export default resetStackAndNavigate;
