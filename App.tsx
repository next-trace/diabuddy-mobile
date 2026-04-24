import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { tokens } from '@next-trace/diabuddy-design-system';

const palette = {
  bgA: '#0A1F3F',
  bgB: '#103260',
  card: '#F4F8FF',
  cardSoft: '#E8F1FF',
  stroke: '#B8CAEB',
  textMain: '#163055',
  textSubtle: '#4F6B95',
  accent: '#1E4F8E',
  accentText: '#FFFFFF',
  mint: '#2FA9A1'
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>DIA BUDDY MOBILE</Text>
          <Text style={styles.title}>Diabetes Care Companion</Text>
          <Text style={styles.subtitle}>
            Timeline-first tracking, meal AI scan, and clinician-ready summaries.
          </Text>
        </View>

        <View style={styles.profileCard}>
          <View>
            <Text style={styles.sectionLabel}>Signed in</Text>
            <Text style={styles.profileName}>Hossein</Text>
            <Text style={styles.profileMeta}>Connected clinic: NextTrace Demo Clinic</Text>
          </View>
          <Pressable style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Profile</Text>
          </Pressable>
        </View>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today</Text>
            <Text style={styles.metric}>4 events</Text>
            <Text style={styles.muted}>Avg glucose 121 mg/dL</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Safety</Text>
            <Text style={[styles.metric, { color: '#1F7A52' }]}>No escalation</Text>
            <Text style={styles.muted}>All checks passed</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Connected Data Sources</Text>
          <View style={styles.sourceRow}>
            <Text style={styles.sourceName}>Apple Health</Text>
            <Text style={styles.sourceState}>Not connected</Text>
          </View>
          <View style={styles.sourceRow}>
            <Text style={styles.sourceName}>Google Health Connect</Text>
            <Text style={styles.sourceState}>Not connected</Text>
          </View>
          <View style={styles.sourceRow}>
            <Text style={styles.sourceName}>Xiaomi Health</Text>
            <Text style={styles.sourceState}>Not connected</Text>
          </View>
          <Pressable style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Open Connections</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.actions}>
            <Pressable style={styles.primaryBtn}><Text style={styles.primaryBtnText}>Log Glucose</Text></Pressable>
            <Pressable style={styles.primaryBtn}><Text style={styles.primaryBtnText}>Meal Scan</Text></Pressable>
            <Pressable style={styles.primaryBtn}><Text style={styles.primaryBtnText}>Timeline</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.bgA
  },
  scroll: {
    padding: 16,
    gap: 12,
    backgroundColor: palette.bgA
  },
  hero: {
    borderRadius: tokens.radii.lg,
    padding: 18,
    backgroundColor: palette.bgB,
    borderWidth: 1,
    borderColor: '#214A84'
  },
  eyebrow: {
    color: '#AFC9F5',
    fontSize: 11,
    letterSpacing: 1.8,
    fontWeight: '700'
  },
  title: {
    marginTop: 6,
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '800'
  },
  subtitle: {
    marginTop: 8,
    color: '#D9E7FF',
    fontSize: 14,
    lineHeight: 20
  },
  profileCard: {
    borderRadius: tokens.radii.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: palette.stroke,
    backgroundColor: palette.card,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12
  },
  sectionLabel: {
    color: palette.textSubtle,
    fontSize: 12,
    fontWeight: '700'
  },
  profileName: {
    marginTop: 4,
    color: palette.textMain,
    fontSize: 20,
    fontWeight: '800'
  },
  profileMeta: {
    marginTop: 4,
    color: palette.textSubtle,
    fontSize: 13
  },
  grid: {
    gap: 10
  },
  card: {
    borderRadius: tokens.radii.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: palette.stroke,
    backgroundColor: palette.card
  },
  cardTitle: {
    color: palette.textMain,
    fontSize: 16,
    fontWeight: '800'
  },
  metric: {
    marginTop: 6,
    color: palette.accent,
    fontSize: 22,
    fontWeight: '800'
  },
  muted: {
    marginTop: 4,
    color: palette.textSubtle,
    fontSize: 13
  },
  sourceRow: {
    marginTop: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: palette.stroke,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sourceName: {
    color: palette.textMain,
    fontSize: 14,
    fontWeight: '600'
  },
  sourceState: {
    color: palette.textSubtle,
    fontSize: 13
  },
  actions: {
    marginTop: 10,
    gap: 8
  },
  primaryBtn: {
    backgroundColor: palette.accent,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primaryBtnText: {
    color: palette.accentText,
    fontSize: 14,
    fontWeight: '700'
  },
  secondaryBtn: {
    marginTop: 12,
    backgroundColor: palette.cardSoft,
    borderWidth: 1,
    borderColor: '#8CA9D3',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondaryBtnText: {
    color: palette.textMain,
    fontSize: 14,
    fontWeight: '700'
  }
});
