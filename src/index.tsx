import { requireNativeComponent, ViewStyle } from 'react-native';

type CustomShapeProps = {
  color: string;
  style: ViewStyle;
};


export const CustomShapeViewManager = requireNativeComponent<CustomShapeProps>(
  'CustomShapeView'
);

export default CustomShapeViewManager;
