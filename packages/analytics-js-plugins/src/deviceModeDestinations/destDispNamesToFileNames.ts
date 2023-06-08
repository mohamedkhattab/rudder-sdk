// map of the destination display names to the destination directory names

import {
  HubSpotDisplayNameToDirNameMap,
  GADisplayNameToDirNameMap,
  HotjarDisplayNameToDirNameMap,
  GoogleAdsDisplayNameToDirNameMap,
  VWODisplayNameToDirNameMap,
  GoogleTagManagerDisplayNameToDirNameMap,
  BrazeDisplayNameToDirNameMap,
  IntercomDisplayNameToDirNameMap,
  KeenDisplayNameToDirNameMap,
  KissmetricsDisplayNameToDirNameMap,
  CustomerIODisplayNameToDirNameMap,
  ChartbeatDisplayNameToDirNameMap,
  ComscoreDisplayNameToDirNameMap,
  FacebookPixelDisplayNameToDirNameMap,
  LotameDisplayNameToDirNameMap,
  OptimizelyDisplayNameToDirNameMap,
  BugsnagDisplayNameToDirNameMap,
  FullstoryDisplayNameToDirNameMap,
  TVSquaredDisplayNameToDirNameMap,
  GA4DisplayNameToDirNameMap,
  MoEngageDisplayNameToDirNameMap,
  AmplitudeDisplayNameToDirNameMap,
  PendoDisplayNameToDirNameMap,
  LyticsDisplayNameToDirNameMap,
  AppcuesDisplayNameToDirNameMap,
  PostHogDisplayNameToDirNameMap,
  KlaviyoDisplayNameToDirNameMap,
  CleverTapDisplayNameToDirNameMap,
  BingAdsDisplayNameToDirNameMap,
  PinterestTagDisplayNameToDirNameMap,
  AdobeAnalyticsDisplayNameToDirNameMap,
  LinkedInInsightTagDisplayNameToDirNameMap,
  RedditPixelDisplayNameToDirNameMap,
  DripDisplayNameToDirNameMap,
  HeapDisplayNameToDirNameMap,
  CriteoDisplayNameToDirNameMap,
  MixpanelDisplayNameToDirNameMap,
  QualtricsDisplayNameToDirNameMap,
  ProfitWellDisplayNameToDirNameMap,
  SentryDisplayNameToDirNameMap,
  QuantumMetricDisplayNameToDirNameMap,
  SnapPixelDisplayNameToDirNameMap,
  PostAffiliateProDisplayNameToDirNameMap,
  GoogleOptimizeDisplayNameToDirNameMap,
  LaunchDarklyDisplayNameToDirNameMap,
  GA360DisplayNameToDirNameMap,
  AdrollDisplayNameToDirNameMap,
  DCMFloodlightDisplayNameToDirNameMap,
  MatomoDisplayNameToDirNameMap,
  VeroDisplayNameToDirNameMap,
  MouseflowDisplayNameToDirNameMap,
  RockerboxDisplayNameToDirNameMap,
  ConvertFlowDisplayNameToDirNameMap,
  SnapEngageDisplayNameToDirNameMap,
  LiveChatDisplayNameToDirNameMap,
  ShynetDisplayNameToDirNameMap,
  WoopraDisplayNameToDirNameMap,
  RollBarDisplayNameToDirNameMap,
  QuoraPixelDisplayNameToDirNameMap,
  JuneDisplayNameToDirNameMap,
  EngageDisplayNameToDirNameMap,
  IterableDisplayNameToDirNameMap,
  YandexMetricaDisplayNameToDirNameMap,
  RefinerDisplayNameToDirNameMap,
  QualarooDisplayNameToDirNameMap,
  PodsightsDisplayNameToDirNameMap,
  AxeptioDisplayNameToDirNameMap,
  SatismeterDisplayNameToDirNameMap,
  MicrosoftClarityDisplayNameToDirNameMap,
  SendinblueDisplayNameToDirNameMap,
  OlarkDisplayNameToDirNameMap,
  LemniskDisplayNameToDirNameMap,
} from './destinationNames';

// The destination directory name is used as the destination SDK file name in CDN
const destDispNamesToFileNamesMap: Record<string, string> = {
  ...HubSpotDisplayNameToDirNameMap,
  ...GADisplayNameToDirNameMap,
  ...HotjarDisplayNameToDirNameMap,
  ...GoogleAdsDisplayNameToDirNameMap,
  ...VWODisplayNameToDirNameMap,
  ...GoogleTagManagerDisplayNameToDirNameMap,
  ...BrazeDisplayNameToDirNameMap,
  ...IntercomDisplayNameToDirNameMap,
  ...KeenDisplayNameToDirNameMap,
  ...KissmetricsDisplayNameToDirNameMap,
  ...CustomerIODisplayNameToDirNameMap,
  ...ChartbeatDisplayNameToDirNameMap,
  ...ComscoreDisplayNameToDirNameMap,
  ...FacebookPixelDisplayNameToDirNameMap,
  ...LotameDisplayNameToDirNameMap,
  ...OptimizelyDisplayNameToDirNameMap,
  ...BugsnagDisplayNameToDirNameMap,
  ...FullstoryDisplayNameToDirNameMap,
  ...TVSquaredDisplayNameToDirNameMap,
  ...GA4DisplayNameToDirNameMap,
  ...MoEngageDisplayNameToDirNameMap,
  ...AmplitudeDisplayNameToDirNameMap,
  ...PendoDisplayNameToDirNameMap,
  ...LyticsDisplayNameToDirNameMap,
  ...AppcuesDisplayNameToDirNameMap,
  ...PostHogDisplayNameToDirNameMap,
  ...KlaviyoDisplayNameToDirNameMap,
  ...CleverTapDisplayNameToDirNameMap,
  ...BingAdsDisplayNameToDirNameMap,
  ...PinterestTagDisplayNameToDirNameMap,
  ...AdobeAnalyticsDisplayNameToDirNameMap,
  ...LinkedInInsightTagDisplayNameToDirNameMap,
  ...RedditPixelDisplayNameToDirNameMap,
  ...DripDisplayNameToDirNameMap,
  ...HeapDisplayNameToDirNameMap,
  ...CriteoDisplayNameToDirNameMap,
  ...MixpanelDisplayNameToDirNameMap,
  ...QualtricsDisplayNameToDirNameMap,
  ...ProfitWellDisplayNameToDirNameMap,
  ...SentryDisplayNameToDirNameMap,
  ...QuantumMetricDisplayNameToDirNameMap,
  ...SnapPixelDisplayNameToDirNameMap,
  ...PostAffiliateProDisplayNameToDirNameMap,
  ...GoogleOptimizeDisplayNameToDirNameMap,
  ...LaunchDarklyDisplayNameToDirNameMap,
  ...GA360DisplayNameToDirNameMap,
  ...AdrollDisplayNameToDirNameMap,
  ...DCMFloodlightDisplayNameToDirNameMap,
  ...MatomoDisplayNameToDirNameMap,
  ...VeroDisplayNameToDirNameMap,
  ...MouseflowDisplayNameToDirNameMap,
  ...RockerboxDisplayNameToDirNameMap,
  ...ConvertFlowDisplayNameToDirNameMap,
  ...SnapEngageDisplayNameToDirNameMap,
  ...LiveChatDisplayNameToDirNameMap,
  ...ShynetDisplayNameToDirNameMap,
  ...WoopraDisplayNameToDirNameMap,
  ...RollBarDisplayNameToDirNameMap,
  ...QuoraPixelDisplayNameToDirNameMap,
  ...JuneDisplayNameToDirNameMap,
  ...EngageDisplayNameToDirNameMap,
  ...IterableDisplayNameToDirNameMap,
  ...YandexMetricaDisplayNameToDirNameMap,
  ...RefinerDisplayNameToDirNameMap,
  ...QualarooDisplayNameToDirNameMap,
  ...PodsightsDisplayNameToDirNameMap,
  ...AxeptioDisplayNameToDirNameMap,
  ...SatismeterDisplayNameToDirNameMap,
  ...MicrosoftClarityDisplayNameToDirNameMap,
  ...SendinblueDisplayNameToDirNameMap,
  ...OlarkDisplayNameToDirNameMap,
  ...LemniskDisplayNameToDirNameMap,
};

export { destDispNamesToFileNamesMap };
