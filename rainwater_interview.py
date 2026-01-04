
# Online Python - IDE, Editor, Compiler, Interpreter

# def sum(a, b):
#     return (a + b)

# a = int(input('Enter 1st number: '))
# b = int(input('Enter 2nd number: '))

# print(f'Sum of {a} and {b} is {sum(a, b)}')


class RainAccumulator:
    clouds = []
    def addRainingCloud(cloud_id: str, t1: int, t2: int, rate: int) -> bool:
        RainAccumulator.clouds.append({'cloud_id': cloud_id, 't1': t1, 't2': t2, 'rate': rate});
        print("Cloud inserted into clouds")
        
    def getRainRate(time: int) -> int:
        rate = 0
        for cloud in RainAccumulator.clouds:
            if time >= cloud['t1'] and time <= cloud['t2']: 
                rate += cloud['rate']
        return rate

    def getRainAccumulation(t1: int, t2: int) -> int:
        rain = 0
        for cloud in RainAccumulator.clouds:
            cloudStartTime = cloud['t1']
            cloudEndTime = cloud['t2']
            rate = cloud['rate']
            # this check ensures that there is overlap b/w interval and the cloud
            if (t1 >= cloudStartTime and t1<=cloudEndTime) or (t2 >= cloudStartTime and t2 <= cloudEndTime):
                actualStart = t1
                actualEnd = cloudEndTime
                if t1 <= cloudStartTime:
                    actualStart = cloudStartTime
                if t2 <= cloudEndTime:
                    actualEnd = t2
                print(f"cloud {cloud['cloud_id']} contributing {(actualEnd - actualStart) * rate}")
                rain += (actualEnd - actualStart) * rate
                
        return rain


RainAccumulator.addRainingCloud("blue", 20, 70, 300);
RainAccumulator.addRainingCloud("green", 50, 60, 100);
RainAccumulator.addRainingCloud("red", 10, 40, 200);

print(RainAccumulator.getRainRate(15)); # 200
print(RainAccumulator.getRainRate(80)); # 0 
print(RainAccumulator.getRainRate(50)); #  400

print(RainAccumulator.getRainAccumulation(30, 60)); # 12000
print(RainAccumulator.getRainAccumulation(25, 35)); # 5000

