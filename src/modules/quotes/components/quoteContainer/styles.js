import CustomStyleSheet from '../../../../utils/CustomStyleSheet';

export const styles = CustomStyleSheet({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '0.5rem',
    marginVertical: '0.2rem',
    borderRadius: '0.3rem',
    paddingVertical: '0.5rem',
    paddingHorizontal: '0.5rem',
    backgroundColor: '$containerColor'
  },
  pairContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pairTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.8rem'
  },
  pairBidsText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '0.8rem'
  },
  describeText: {
    fontSize: '0.6rem'
  },
  percentText: {
    fontWeight: 'bold',
    fontSize: '0.8rem'
  },
});
