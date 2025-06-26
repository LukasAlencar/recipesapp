import { Snackbar } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomSnackbar({
  visible,
  message,
  onDismiss,
  duration = 3000,
  type = 'error', 
}) {
  
  const config = {
    error: {
      backgroundColor: '#ff4d4d',
      icon: 'alert-circle',
      actionButtonColor: '#ff4d4d',
      actionButtonBg: '#fff',
    },
    success: {
      backgroundColor: '#4caf50',
      icon: 'check-circle',
      actionButtonColor: '#4caf50',
      actionButtonBg: '#fff',
    },
  };

  const current = config[type] || config.error;

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      style={[styles.snackbar, { backgroundColor: current.backgroundColor }]}
      action={{
        label: '',
        onPress: onDismiss,
      }}
    >
      <View style={styles.content}>
        <MaterialCommunityIcons
          name={current.icon}
          size={20}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.message}>{message}</Text>

        <TouchableOpacity
          onPress={onDismiss}
          style={[styles.actionButton, { backgroundColor: current.actionButtonBg }]}
        >
          <Text style={[styles.actionButtonText, { color: current.actionButtonColor }]}>
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </Snackbar>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    borderRadius: 8,
    marginHorizontal: 16,
    paddingRight: 0,
    marginBottom: 60,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 8,
  },
  message: {
    color: '#fff',
    flex: 1,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 12,
  },
  actionButtonText: {
    fontWeight: 'bold',
  },
});
