/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import ScreenContainer from '../../components/common/ScreenContainer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  HomeStackParamList,
  StackHeaderNavigationProp,
} from '../../types/screen';
import StackHeader from '../../components/common/header/StackHeader';
import GroupDetailHeader from '../../components/group/groupDetail/GroupDetailHeader';
import AlbumContainer from '../../components/album/AlbumContainer';
import MemberList from '../../components/member/MemberList';
import {lightColorMap, darkColorMap} from '../../utils/groupColor';
import Partition from '../../components/common/Partition';

type GroupDetailRouteProp = RouteProp<HomeStackParamList, 'GroupDetail'>;

const GroupDetail: React.FC = () => {
  const navigation = useNavigation<StackHeaderNavigationProp>();
  const route = useRoute<GroupDetailRouteProp>();

  const {groupId, groupName} = route.params.groupInfo || {
    groupId: '',
    groupName: '',
  };

  const [lightColor, setLightColor] = useState('');
  const [darkColor, setDarkColor] = useState('');

  const groupInfoDetail = {
    groupId: '1',
    groupName: 'test',
    groupDescription: 'SSAFY 자율 602팀 화이팅~!',
    groupColor: 'pink',
    groupIcon: 'heart',
  };

  useEffect(() => {
    if (groupName) {
      navigation.setOptions({
        header: () => <StackHeader title={groupName} />,
      });
    }

    setLightColor(lightColorMap[groupInfoDetail.groupColor]);
    setDarkColor(darkColorMap[groupInfoDetail.groupColor]);
  }, [groupInfoDetail.groupColor, groupName, navigation]);

  return (
    <ScreenContainer>
      <GroupDetailHeader
        groupInfoDetail={groupInfoDetail}
        lightColor={lightColor}
        darkColor={darkColor}
      />
      <Partition />
      <MemberList />
      <Partition />
      <AlbumContainer
        title="다운 가능한 사진"
        lightColor={lightColor}
        darkColor={darkColor}
      />
    </ScreenContainer>
  );
};

export default GroupDetail;
