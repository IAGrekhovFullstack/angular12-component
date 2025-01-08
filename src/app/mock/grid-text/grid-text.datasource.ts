export const GridTextDatasource = {
    Workplaces: [
        {
            WorkplaceId: 1,
            WorkplaceName: "Добыча 1",
            ShovelsAmount: 10,
            TrucksAmount: 5,
            UnloadsAmount: 3,
            ShovelsTotal: {
                TotalVolume: {
                    Value: 5000,
                    Unit: "куб. м"
                },
                TotalPercent: {
                    Value: 75,
                    Unit: "%"
                }
            },
            PlanExecution: [
                {
                    LoadTypeName: "Стандартная загрузка",
                    PlanValue: 10000,
                    FactValue: 9500,
                    LagValue: 500,
                    LagPercent: 5,
                    Uom: "тонн"
                }
            ],
            ShovelsIndicators: {
                Loads: {
                    TotalLoads: {
                        TotalLoadWeight: 4000,
                        TotalLoadPercent: 80
                    },
                    LoadsDetails: [
                        {
                            TruckModelName: "Модель A",
                            AvgLoadWeight: 800,
                            AvgLoadPercent: 80
                        },
                        {
                            TruckModelName: "Модель B",
                            AvgLoadWeight: 700,
                            AvgLoadPercent: 70
                        }
                    ]
                },
                LoadTime: {
                    TotalLoadTime: {
                        TotalLoadTimeNorm: 100,
                        TotalLoadTimeFact: 90
                    },
                    LoadTimeDetails: [
                        {
                            TruckModelName: "Модель A",
                            AvgLoadTimeNorm: 15,
                            AvgLoadTimeFact: 14
                        },
                        {
                            TruckModelName: "Модель B",
                            AvgLoadTimeNorm: 10,
                            AvgLoadTimeFact: 12
                        }
                    ]
                },
                TechnicalReadinessTime: {
                    TotalTechnicalReadinessTime: 300,
                    TechnicalReadinessTimeDetails: [
                        {
                            StoppageTypeName: "Техническое обслуживание",
                            Duration: 50
                        },
                        {
                            StoppageTypeName: "Ремонт",
                            Duration: 20
                        },
                    ]
                },
                OtherStoppageTime: {
                    TotalOtherStoppageTime: 150,
                    OtherStoppageTimeDetails: [
                        {
                            StoppageTypeName: "Перегрузка",
                            Duration: 75
                        },
                        {
                            StoppageTypeName: "Ожидание",
                            Duration: 50
                        },
                    ]
                },
                Performance: {
                    TotalPerformance: {
                        Performance: 900,
                        Volume: 2500,
                        TotalLoadDuration: 60
                    },
                    HourDetails: [
                        {
                            Hour: 1,
                            Performance: 150,
                            Volume: 400,
                            LoadDuration: 10
                        },
                        {
                            Hour: 2,
                            Performance: 200,
                            Volume: 600,
                            LoadDuration: 15
                        }
                    ]
                }
            },
            TrucksIndicators: {
                LoadWaitingTime: {
                    TotalLoadWaitingTime: {
                        TotalSumDuration: 120,
                        TotalAvgDuration: 30
                    },
                    LoadWaitingTimeDetails: [
                        {
                            TruckName: "Грузовик A",
                            SumDuration: 40,
                            AvgDuration: 10
                        },
                        {
                            TruckName: "Грузовик B",
                            SumDuration: 80,
                            AvgDuration: 20
                        }
                    ]
                },
                TripAvgSpeeds: {
                    TotalTripAvgSpeed: {
                        TotalLoadedAvgSpeed: 30,
                        AvgOutTripSpeed: 40,
                        AvgTotalSpeed: 35
                    },
                    TripAvgSpeedDetails: [
                        {
                            TruckModelName: "Грузовик A",
                            LoadedAvgSpeed: 25,
                            AvgOutTripSpeed: 35,
                            AvgTotalSpeed: 30
                        },
                        {
                            TruckModelName: "Грузовик B",
                            LoadedAvgSpeed: 32,
                            AvgOutTripSpeed: 45,
                            AvgTotalSpeed: 38
                        }
                    ]
                },
                TripAvgMileages: {
                    TotalTripAvgMileage: {
                        TotalLoadedAvgMileage: 250
                    },
                    TripAvgMileageDetails: [
                        {
                            TruckModelName: "Грузовик A",
                            LoadTypeName: 1,
                            LoadedAvgMileage: 200
                        },
                        {
                            TruckModelName: "Грузовик B",
                            LoadTypeName: 1,
                            LoadedAvgMileage: 180
                        }
                    ]
                }
            },
            Unloads: [
                {
                    UnloadId: 1,
                    UnloadName: "Разгрузка 1"
                },
                {
                    UnloadId: 2,
                    UnloadName: "Разгрузка 2"
                }
            ],
            LagPlanExecution: {
                LagPercent: 5,
                LagVolume: 500
            },
            Shovels: [
                {
                    ShovelId: 1,
                    ShovelName: "Экскаватор 1",
                    ModelId: 101,
                    ModelName: "Модель X",
                    LoadExecution: {
                        PlanVolume: 10000,
                        FactVolume: 9500,
                        FactPercent: 95
                    },
                    LagPlanExecution: {
                        LagVolume: 500
                    },
                    LoadTime: {
                        FirstLoadTime: "2025-01-07T08:00:00Z",
                        LastLoadTime: "2025-01-07T10:00:00Z"
                    },
                    ShovelsIndicators: {
                        Loads: {
                            TotalLoads: {
                                TotalLoadWeight: 5000,
                                TotalLoadPercent: 80
                            },
                            LoadsDetails: [
                                {
                                    TruckModelName: "Модель C",
                                    AvgLoadWeight: 1000,
                                    AvgLoadPercent: 100
                                }
                            ]
                        },
                        LoadTime: {
                            TotalLoadTime: {
                                TotalLoadTimeNorm: 120,
                                TotalLoadTimeFact: 110
                            },
                            LoadTimeDetails: [
                                {
                                    TruckModelName: "Модель C",
                                    AvgLoadTimeNorm: 20,
                                    AvgLoadTimeFact: 18
                                }
                            ]
                        },
                        TechnicalReadinessTime: {
                            TotalTechnicalReadinessTime: 200,
                            TechnicalReadinessTimeDetails: [
                                {
                                    StoppageTypeName: "Техническое обслуживание",
                                    Duration: 30
                                }
                            ]
                        },
                        OtherStoppageTime: {
                            TotalOtherStoppageTime: 75,
                            OtherStoppageTimeDetails: [
                                {
                                    StoppageTypeName: "Ожидание",
                                    Duration: 50
                                }
                            ]
                        },
                        Performance: {
                            TotalPerformance: {
                                Performance: 800,
                                Volume: 2200,
                                TotalLoadDuration: 50
                            },
                            HourDetails: [
                                {
                                    Hour: 1,
                                    Performance: 180,
                                    Volume: 450,
                                    LoadDuration: 12
                                }
                            ]
                        }
                    },
                    TrucksIndicators: {
                        LoadWaitingTime: {
                            TotalLoadWaitingTime: {
                                TotalSumDuration: 100,
                                TotalAvgDuration: 25
                            },
                            LoadWaitingTimeDetails: [
                                {
                                    TruckName: "Грузовик A",
                                    SumDuration: 50,
                                    AvgDuration: 12.5
                                }
                            ]
                        },
                        TripAvgSpeeds: {
                            TotalTripAvgSpeed: {
                                TotalLoadedAvgSpeed: 28,
                                AvgOutTripSpeed: 37,
                                AvgTotalSpeed: 32
                            },
                            TripAvgSpeedDetails: [
                                {
                                    TruckModelName: "Грузовик A",
                                    LoadedAvgSpeed: 26,
                                    AvgOutTripSpeed: 36,
                                    AvgTotalSpeed: 30
                                }
                            ]
                        },
                        TripAvgMileages: {
                            TotalTripAvgMileage: {
                                TotalLoadedAvgMileage: 240
                            },
                            TripAvgMileageDetails: [
                                {
                                    TruckModelName: "Грузовик A",
                                    LoadTypeName: 1,
                                    LoadedAvgMileage: 220
                                }
                            ]
                        }
                    },
                    Trucks: [],
                    Unloads: []
                }
            ]
        }
    ]
};

export const ColumnData = [
    {
      code: 'LoadTypeName',
      name: 'Наименование загрузки'
    },
    {
      code: 'PlanValue',
      name: 'Плановый объем'
    },
    {
      code: 'FactValue',
      name: 'Фактический объем'
    }
  ]