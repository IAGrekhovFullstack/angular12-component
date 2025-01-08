interface ITruckLoadTimeDetails {
    TruckModelName: string;
    AvgLoadTimeNorm: number;
    AvgLoadTimeFact: number;
}

interface IStoppageTypeDetails {
    StoppageTypeName: string;
    Duration: number;
}

interface IHourPerformance {
    Hour: number;
    Performance: number;
    Volume: number;
    LoadDuration: number;
}

interface ITotalShovelsModel {
    Value: number;
    Unit: string;
}

interface IShovelsTotalModel {
    TotalVolume: ITotalShovelsModel;
    TotalPercent: ITotalShovelsModel;
}

export interface IPlanExecutionModel {
    LoadTypeName: string;
    PlanValue: number;
    FactValue: number;
    LagValue: number;
    LagPercent: number;
    Uom: string;
}

interface IShovelIndicator {
    Loads: ILoadDetails;
    LoadTime: ILoadTimeDetails;
    TechnicalReadinessTime: ITechnicalReadinessTimeDetails;
    OtherStoppageTime: IOtherStoppageTimeDetails;
    Performance: IPerformanceDetails;
}

interface ITruckIndicator {
    LoadWaitingTime: ILoadWaitingTimeDetails;
    TripAvgSpeeds: ITripAvgSpeedDetails;
    TripAvgMileages: ITripAvgMileageDetails;
}
interface ILoadDetails {
    TotalLoads: ITotalLoads
    LoadsDetails: ITruckLoadDetails[];
}

interface ITotalLoads {
    TotalLoadWeight: number
    TotalLoadPercent: number
}

interface IUnload {
    UnloadId: number;
    UnloadName: string;
}

export interface IShovel {
    ShovelId: number;
    ShovelName: string;
    ModelId: number;
    ModelName: string;
    LoadExecution: ILoadExecution;
    LagPlanExecution: ILagPlanExecution;
    LoadTime: ILoadTime;
    ShovelsIndicators: IShovelIndicator;
    TrucksIndicators: ITruckIndicator;
    Trucks: ITruck[];
    Unloads: IUnload[];
}

interface ILoadExecution {
    PlanVolume: number;
    FactVolume: number;
    FactPercent: number;
}

interface ILagPlanExecution {
    LagVolume: number;
}

interface ILoadTime {
    FirstLoadTime: string;  
    LastLoadTime: string; 
}

interface ITruckLoadDetails {
    TruckModelName: string;
    AvgLoadWeight: number;
    AvgLoadPercent: number;
}

interface ILoadTimeDetails {
    TotalLoadTime: ITotalLoadTime;
    LoadTimeDetails: ITruckLoadTimeDetails[];
}

interface ITotalLoadTime {
    TotalLoadTimeNorm: number;
    TotalLoadTimeFact: number;
}

interface ITechnicalReadinessTimeDetails {
    TotalTechnicalReadinessTime: number;
    TechnicalReadinessTimeDetails: IStoppageTypeDetails[];
}

interface IOtherStoppageTimeDetails {
    TotalOtherStoppageTime: number;
    OtherStoppageTimeDetails: IStoppageTypeDetails[];
}

interface IPerformanceDetails {
    TotalPerformance: ITotalPerformance;
    HourDetails: IHourPerformance[];
}

interface ITotalPerformance {
    Performance: number;
    Volume: number;
    TotalLoadDuration: number;
}

interface ITruck {
    TrucksId: number;
    TrucksName: string;
    TrucksIcon: string;
    AvgLoadPercent: number;
    AvgSpeed: number;
    TripCount: number;
    LoadWaitingTime: ILoadWaitingTimeDetails[];
    TripAvgSpeeds: ITripAvgSpeedDetails[];
    TripAvgMileages: ITripAvgMileageDetails[];
}

interface ILoadWaitingTimeDetails {
    TotalLoadWaitingTime: ITotalLoadWaitingTime;
    LoadWaitingTimeDetails: ITruckLoadWaitingDetails[];
}

interface ITotalLoadWaitingTime {
    TotalSumDuration: number;
    TotalAvgDuration: number;
}

interface ITruckLoadWaitingDetails {
    TruckName: string;
    SumDuration: number;
    AvgDuration: number;
}

interface ITripAvgSpeedDetails {
    TotalTripAvgSpeed: ITotalTripAvgSpeed;
    TripAvgSpeedDetails: ITruckTripAvgSpeedDetails[];
}

interface ITotalTripAvgSpeed {
    TotalLoadedAvgSpeed: number;
    AvgOutTripSpeed: number;
    AvgTotalSpeed: number;
}

interface ITruckTripAvgSpeedDetails {
    TruckModelName: string;
    LoadedAvgSpeed: number;
    AvgOutTripSpeed: number;
    AvgTotalSpeed: number;
}

interface ITripAvgMileageDetails {
    TotalTripAvgMileage: ITotalTripAvgMileage;
    TripAvgMileageDetails: ITruckTripAvgMileageDetails[];
}

interface ITotalTripAvgMileage {
    TotalLoadedAvgMileage: number
}

interface ITruckTripAvgMileageDetails {
    TruckModelName: string;
    LoadTypeName: number;
    LoadedAvgMileage: number;
}

interface IUnload {
    UnloadId: number;
    UnloadName: string;
}


export interface IWorkplaceOpeartionalStatisticModel {
    WorkplaceId: number;
    WorkplaceName: string;
    ShovelsAmount: number;
    TrucksAmount: number;
    UnloadsAmount: number;
    ShovelsTotal: IShovelsTotalModel;
    PlanExecution: IPlanExecutionModel[];
    ShovelsIndicators: IShovelIndicator;
    TrucksIndicators: ITruckIndicator;
    LagPlanExecution: {
        LagPercent: number;
        LagVolume: number
    }
    Shovels: IShovel[];
}

export interface IOperationalStatisticViewModel {
    Workplaces: IWorkplaceOpeartionalStatisticModel[];
}