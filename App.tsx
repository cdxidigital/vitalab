import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const activities = [
  { id: 'walk', name: '10-min walk' },
  { id: 'sleep', name: 'Sleep 7â€“9h' },
  { id: 'veg', name: 'Meal with veg' },
  { id: 'mind', name: 'Mindfulness 10min' },
  { id: 'chat', name: 'Meaningful conversation' }
];

export default function App() {
  const [score, setScore] = useState(0);

  function logActivity() {
    setScore(prev => Math.min(100, prev + 10));
  }

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7FAF9' }}>
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Svg height="150" width="150">
          <Circle stroke="#eee" fill="none" cx="75" cy="75" r={radius} strokeWidth="10" />
          <Circle
            stroke="#4FB286"
            fill="none"
            cx="75" cy="75"
            r={radius}
            strokeWidth="10"
            strokeDasharray={${circumference} }
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </Svg>
        <Text style={{ position: 'absolute', fontSize: 42, fontWeight: 'bold', color: '#24343C' }}>{score}</Text>
        <Text style={{ marginTop: 8, fontSize: 16, color: '#4FB286' }}>Your Wellness Score</Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
        <Text style={{ fontSize: 18, marginBottom: 12, color: '#24343C' }}>Quick Log</Text>
        <FlatList
          data={activities}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={logActivity}
              style={{
                padding: 12,
                marginBottom: 8,
                backgroundColor: '#fff',
                borderRadius: 8,
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowRadius: 4,
                elevation: 2
              }}
            >
              <Text style={{ fontSize: 16, color: '#0F6B6D' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
