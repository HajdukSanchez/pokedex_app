import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    ...StyleSheet.absoluteFillObject,
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionText: {
    fontSize: 18,
    color: 'black',
    marginRight: 10,
  },
  typesContainer: {
    flexDirection: 'row',
  },
  spriteImage: {
    width: 100,
    height: 100,
  },
  movesContainer: {
    flexWrap: 'wrap',
  },
  movesText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
