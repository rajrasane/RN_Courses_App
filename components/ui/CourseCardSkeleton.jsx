import React from 'react';
import { View, StyleSheet } from 'react-native';
import Skeleton from './Skeleton';
import Card from './Card';
import { SPACING } from '../../styles/designSystem';

const CourseCardSkeleton = () => {
  return (
    <Card style={styles.container}>
      <Skeleton width="100%" height={120} radius="md" />
      <View style={styles.content}>
        <Skeleton width="70%" height={22} style={styles.title} />
        <Skeleton width="40%" height={16} style={styles.instructor} />
        <View style={styles.stats}>
          <Skeleton width={60} height={16} radius="sm" />
          <Skeleton width={80} height={16} radius="sm" />
        </View>
        <View style={styles.footer}>
          <Skeleton width={80} height={20} radius="sm" />
          <Skeleton width={100} height={36} radius="md" />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  content: {
    padding: SPACING.md,
  },
  title: {
    marginBottom: SPACING.sm,
  },
  instructor: {
    marginBottom: SPACING.md,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
});

export default CourseCardSkeleton; 