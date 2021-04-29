import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Platform } from 'react-native';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  containerWrapper: {
    
  },
  containerBox: {
    // backgroundColor: 'green',
  },
  separator: {
    height: 10,
    // backgroundColor: theme.colors.secondaryColor,
  },
  flexCol: {
    flex: 1,
    flexDirection: 'column',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  viewContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 5,
    borderBottomColor: 'brown',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: theme.appMargin.marginSize,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  descriptionText: {
    color: theme.colors.secondaryColor2,
    marginBottom: 3,
    fontFamily: Platform.select({
      android: 'sans-serif',
      ios: 'Roboto',
      default: 'math',
    }),
    fontSize: Platform.select({
      // android: 40,
      // ios: 50,
      // default: 70,
    })
  },
  languageText: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    overflow: 'hidden',
    fontSize: 20,
    color: theme.colors.primaryColor,
    backgroundColor: theme.colors.primaryBGColor,
    minWidth: '20%',
    maxWidth: '35%',
    textAlign: 'center',
    borderRadius: 2,
    marginTop: 3,
    padding: 3,
  },
  avataStyle: {
    width: 50,
    height: 50,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  ratingsWrap: {
    margin: 12,
    padding: 5,
  },
  ratingsCont: {
    justifyContent: 'space-between',
    width: 'auto',
    textAlign: 'center',
  },
  ratingsBox: {
    width: 80,
    textAlign: 'center',
    marginBottom: 4,
  },
  ratingsBoxTop: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingsContTop: {
    flexGrow:2,
  },
  x: {
    borderBottomColor: 5,
    borderBottomColor: 'green'
  }
});

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in react, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownersAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownersAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionist with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownersAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownersAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  
  // GEt the nodes from the edge array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <View>
          <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => 
              <View style={styles.viewContainer}>
                <View style={styles.infoContainer}>
                  <Image 
                    source={{ uri: `${item.ownersAvatarUrl}`}}
                    style={styles.avataStyle}
                  />
                  <View style={styles.detailsContainer}>
                    <Text style={styles.nameText}>{item.fullName}</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                    <Text style={styles.languageText}>{item.language}</Text>
                  </View>
                </View>

                <View style={[styles.ratingsWrap, styles.flexCol]}>
                  <View style={[styles.flexRow, styles.ratingsCont]}>
                    <Text style={[styles.ratingsBox, styles.ratingsBoxTop]}>{item.forksCount}</Text>
                    <Text style={[styles.ratingsBox, styles.ratingsBoxTop]}>{item.stargazersCount}</Text>
                    <Text style={[styles.ratingsBox, styles.ratingsBoxTop]}>{item.ratingAverage}</Text>
                    <Text style={[styles.ratingsBox, styles.ratingsBoxTop]}>{item.reviewCount}</Text>
                  </View>

                  <View style={[styles.flexRow, styles.ratingsCont]}>
                    <Text style={styles.ratingsBox}>Stars</Text>
                    <Text style={styles.ratingsBox}>Forks</Text>
                    <Text style={styles.ratingsBox}>Reviews</Text>
                    <Text style={styles.ratingsBox}>Rating</Text>
                  </View>
                </View>
              </View>
            }
          />

        </View>
      </View>
    </View>
  )
}

export default RepositoryList;