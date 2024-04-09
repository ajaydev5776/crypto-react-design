package helpers

import "sync"

// type Map map[string]any

type SafeMap[K comparable, V any] struct {
	m   map[K]V
	mux sync.RWMutex
}

func NewSafeMap[K comparable, V any]() *SafeMap[K, V] {
	return &SafeMap[K, V]{
		m:   make(map[K]V),
		mux: sync.RWMutex{},
	}
}

// // Inc increments the counter for the given key.
func (c *SafeMap[K, V]) Put(key K, val V) {
	c.mux.Lock()
	c.m[key] = val
	c.mux.Unlock()
}
func (c *SafeMap[K, V]) Get(key K) V {
	c.mux.Lock()
	res := c.m[key]
	c.mux.Unlock()
	return res
}
func (c *SafeMap[K, V]) Delete(key K) {
	c.mux.Lock()
	delete(c.m, key)
	c.mux.Unlock()
}
func (c *SafeMap[K, V]) Has(key K) bool {
	c.mux.RLock()
	_, ok := c.m[key]
	c.mux.RUnlock()
	return ok
}
func (c *SafeMap[K, V]) Count() int {
	c.mux.RLock()
	count := len(c.m)
	c.mux.RUnlock()

	return count
}

func (c *SafeMap[K, V]) Pop(key K) (v V, exists bool) {

	c.mux.Lock()
	v, exists = c.m[key]
	delete(c.m, key)
	c.mux.Unlock()
	return v, exists
}

// IsEmpty checks if map is empty.
func (c *SafeMap[K, V]) IsEmpty() bool {
	return c.Count() == 0
}

func (c *SafeMap[K, V]) Keys() []K {
	count := c.Count()
	keys := make([]K, 0, count)
	c.mux.RLock()
	for k, _ := range c.m {
		keys = append(keys, k)
	}
	c.mux.RUnlock()
	return keys
}

func (c *SafeMap[K, V]) Clone() map[K]V {
	res := make(map[K]V)

	c.mux.RLock()
	for k, v := range c.m {
		res[k] = v
	}
	c.mux.RUnlock()
	return res
}

// // ConcurrentFrequency counts the frequency of each rune in an array of given texts and returns this
// // data as a FreqMap
// func ConcurrentFrequency(t []string) FreqMap {
// 	var wg sync.WaitGroup
// 	wg.Add(len(t))
// 	c := SafeCounter{m: make(map[rune]int)}
// 	for _, text := range t {
// 		go func(s string) {
// 			defer wg.Done()
// 			for _, r := range s {
// 				c.Inc(r)
// 			}
// 		}(text) // function must be called with text passed in (I guess?)
// 	}

// 	wg.Wait()
// 	return c.m
// }
