import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';

const MyComponent = (props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          fabStyle={!open ? {backgroundColor:'black'} : {}}
          open={open}
          icon={open ? 'quadcopter' : 'plus'}
          actions={[
            {
              icon: 'cart-outline',
              label: 'Cart',
              onPress: () => props.navigation.navigate('cart'),
            },
            {
              icon: 'home',
              label: 'Home',
              onPress: () => props.navigation.reset({
                                              index: 0,
                                              routes: [{ name: 'hometabnavigator' }],
                                            })
            },
            {
              icon: 'magnify',
              label: 'Search',
              onPress: () => console.log(props.navigation),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MyComponent;