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
  sectionsContainer: {
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
    borderRadius: 5,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'column',
  },
  statItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statText: {
    width: 150,
  },
  statBaseContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  statBaseText: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    minWidth: '20%',
    maxWidth: '100%',
    fontWeight: 'bold',
    borderRadius: 10,
  },
});
